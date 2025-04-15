import VotingComponent from "./VotingComponent";
import { Flex } from "@chakra-ui/react";
import { getProductVotes } from "../../../../../utils/supabase/dataActions";
import { getTranslations } from "next-intl/server";
const DEFAULT_VOTE_OPTIONS = [
  {
    categoryKey: "lasting",
    options: ["Weak", "Moderate", "Long Lasting", "Eternal"],
  },
  {
    categoryKey: "season",
    options: ["Winter", "Spring", "Summer", "Autumn"],
  },
  {
    categoryKey: "sillage",
    options: ["Intimate", "Moderate", "Strong", "Enormous"],
  },
  {
    categoryKey: "timeofday",
    options: ["Day", "Night"],
  },
];


const Voting = async ({ productId }) => {
  const votes = await getProductVotes(productId);
  const t = await getTranslations("Voting");


  const formattedVotes = votes.reduce((acc, { category, option_key, votes_count }) => {
    if (!acc[category]) acc[category] = {};
    acc[category][option_key] = votes_count;
    return acc;
  }, {});

  const votingOptions = DEFAULT_VOTE_OPTIONS.map(({ categoryKey, options }) => ({
    category: t(`categories.${categoryKey}`),
    options: options.map((option) => ({
      label: t(`options.${option}`),
      voteKey: option,
      votes: formattedVotes[t(`categories.${categoryKey}`)]?.[option] || 0,
    })),
  }));


  return (
    <Flex maxW="100dvw" flexDir="column" gap="30px" width="100%">
      {votingOptions.map(({ category, options }) => (
        <VotingComponent key={category} productId={productId} options={options} heading={category} userVotes={votes} />
      ))}
    </Flex>
  );
};

export default Voting;
