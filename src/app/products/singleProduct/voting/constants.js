const option1 = [
    { label: "Weak", voteKey: "first" },
    { label: "Moderate", voteKey: "second" },
    { label: "Long Lasting", voteKey: "third" },
    { label: "Eternal", voteKey: "forth" },
  ];
  
  const option2 = [
    { label: "Winter", voteKey: "first" },
    { label: "Summer", voteKey: "second" },
    { label: "Autumn", voteKey: "third" },
    { label: "Spring", voteKey: "forth" },
  ];
  

  const option3 = [
    { label: "Intimate", voteKey: "first" },
    { label: "Moderate", voteKey: "second" },
    { label: "Strong", voteKey: "third" },
    { label: "Enormous", voteKey: "forth" },
  ];
  
  const option4 = [
    { label: "Day", voteKey: "first" },
    { label: "Evening", voteKey: "second" },
  ];
  
  export const DEFAULT_VOTE_OPTIONS = [
    {
      category: "HOW LONG DOES IT LAST?",
      options: ["Weak", "Moderate", "Long Lasting", "Eternal"],
    },
    {
      category: "FOR WHAT TIME OF YEAR",
      options: ["Winter", "Summer", "Autumn", "Spring"],
    },
    {
      category: "IT CAN BE FELT FROM A DISTANCE",
      options: ["Intimate", "Moderate", "Strong", "Enormous"],
    },
    {
      category: "FOR WHAT TIME OF DAY",
      options: ["Day", "Evening"],
    },
  ];
  
  export { option1, option2, option3, option4 };