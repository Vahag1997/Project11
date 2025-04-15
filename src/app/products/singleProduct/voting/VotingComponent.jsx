"use client";
import { useState, useEffect } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import VoteOption from "./VoteOption";
import { updateProductVote } from "../../../../../utils/supabase/dataActions";

const VotingComponent = ({ options, heading, productId, userVotes }) => {
  const formattedVotes = userVotes.reduce(
    (acc, { option_key, votes_count }) => {
      acc[option_key] = votes_count;
      return acc;
    },
    {}
  );

  // Check if user has voted in this category before (stored in localStorage)
  const localVoteKey = `voted-${productId}-${heading}`;
  const [hasVoted, setHasVoted] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem(localVoteKey) === "true"
      : false
  );

  const [votes, setVotes] = useState(formattedVotes);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      Object.keys(formattedVotes).length > 0
    ) {
      setHasVoted(localStorage.getItem(localVoteKey) === "true");
    }
  }, [formattedVotes]);

  // Handle voting (prevent multiple votes)
  const handleVote = async (voteKey) => {
    if (hasVoted) return;

    const updatedVote = await updateProductVote(productId, heading, voteKey);

    if (updatedVote) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [voteKey]: (prevVotes[voteKey] || 0) + 1,
      }));
      localStorage.setItem(localVoteKey, "true");
      setHasVoted(true);
    }
  };


  const totalVotesInCategory =
    userVotes
      .filter((vote) => vote.category === heading) 
      .reduce((sum, vote) => sum + vote.votes_count, 0) || 1;

  const percentages = options.map((option) => {
    const voteCount = votes[option.voteKey] || 0;
    return {
      ...option,
      value: Math.round((voteCount / totalVotesInCategory) * 100), 
    };
  });


  return (
    <Flex flexDir={"column"} gap={8} p={{ base: 4, md: 6 }} borderRadius="md" boxShadow="sm" width="100%">
      <Heading fontSize="26px" fontWeight={800} textAlign="start">
        {heading}
      </Heading>

      <Flex direction="column" gap="16px">
        {percentages.map(({ label, value, voteKey }) => (
          <VoteOption
            key={voteKey}
            label={label}
            value={value}
            onVote={() => handleVote(voteKey)}
            isDisabled={hasVoted}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default VotingComponent;
