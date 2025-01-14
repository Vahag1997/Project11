import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import VoteOption from "./VoteOption";



const VotingComponent = ({ options, heading}) => {
  // Initialize state dynamically based on the number of options
  const initialVotes = options?.reduce((acc, option) => {
    acc[option.voteKey] = 0;
    return acc;
  }, {});
  
  const [votes, setVotes] = useState(initialVotes);

  // Calculate percentages based on total votes
  const totalVotes = Object.values(votes).reduce((acc, vote) => acc + vote, 0);
  const percentages = options.map((option) => ({
    ...option,
    value: totalVotes > 0 ? Math.round((votes[option.voteKey] / totalVotes) * 100) : 0,
  }));

  // Handle voting logic
  const handleVote = (voteKey) => {
    setVotes((prev) => ({
      ...prev,
      [voteKey]: prev[voteKey] + 1,
    }));
  };

  return (
    <Box p={6} borderRadius="md" boxShadow="sm" w="40dvw">
      <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="start">
        {heading}
      </Text>

      {/* Iterating Over Voting Data */}
      <Flex direction="column" gap="24px">
        {percentages.map(({ label, value, voteKey }) => (
          <VoteOption
            key={label}
            label={label}
            value={value}
            onVote={() => handleVote(voteKey)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default VotingComponent;