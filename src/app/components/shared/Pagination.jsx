import { HStack } from "@chakra-ui/react";
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from "../ui/pagination";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const selectedStyle = {
        color: 'green'
    };

    return (
        <></>
        // <PaginationRoot count={20} pageSize={2} defaultPage={1} variant="green.50">
        //     <HStack justify="center" mt="30px">
        //         <PaginationPrevTrigger />
        //         <PaginationItems selectedStyle={selectedStyle} />
        //         <PaginationNextTrigger />
        //     </HStack>
        // </PaginationRoot>
    );
};

export default Pagination;
