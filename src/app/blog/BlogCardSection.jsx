import { Flex } from "@chakra-ui/react"
import { HeadingForHome } from "../components/shared"


const BlogCardSection = () => {

    return (
        <Flex background="#093623">
            <HeadingForHome
            heading={"Perfume Magazine"}
            text={"Stay up to date with the latest in the world of fragrances, expert tips, and insider news"}/>
        </Flex>
    )
}

export default BlogCardSection