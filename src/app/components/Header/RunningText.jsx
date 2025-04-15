import styles from "./RunningText.module.css";
import { Text } from "@chakra-ui/react";

function RunningText(){
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <Text fontSize="16px" fontWeight={700}>Smelling good is the first step to feeling good</Text>
          <Text fontSize="16px" fontWeight={700}>A fragrance as rare as you</Text>
          <Text fontSize="16px" fontWeight={700}>Real men wear perfume</Text>
          <Text fontSize="16px" fontWeight={700}>Fragrance speaks louder than words</Text>
          <Text fontSize="16px" fontWeight={700}>Spray and slay</Text>
          <Text fontSize="16px" fontWeight={700}>Free Delivery</Text>
        </div>
        {/* Duplicate copy */}
        <div className={styles.marqueeContent}>
          <Text fontSize="16px" fontWeight={700}>Smelling good is the first step to feeling good</Text>
          <Text fontSize="16px" fontWeight={700}>A fragrance as rare as you</Text>
          <Text fontSize="16px" fontWeight={700}>Real men wear perfume</Text>
          <Text fontSize="16px" fontWeight={700}>Fragrance speaks louder than words</Text>
          <Text fontSize="16px" fontWeight={700}>Spray and slay</Text>
          <Text fontSize="16px" fontWeight={700}>Free Delivery</Text>
        </div>
      </div>
    </div>
  );
};

export default RunningText;
