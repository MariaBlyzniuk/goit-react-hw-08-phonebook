import { Box } from 'components/Box';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Box
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            <Oval
            height={120}
            width={120}
            color="#62dfd8"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}

            />
        </Box>
    );
};