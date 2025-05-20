import { Box, Grid, Heading, Text, VStack, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/actions/course';
import Loader from '../Layout/Loader/Loader';

const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const { lectures, loading } = useSelector(state => state.course);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }

  return loading ? (
    <Loader />
  ) : (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']} placeItems="center">
      {lectures && lectures.length > 0 ? (
        <>
          <Box p={4} maxW="100%" mx="auto">
            <Center>
              <video
                width="100%"
                style={{ maxWidth: '800px' }}
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                src={lectures[lectureNumber].video.url}
              ></video>
            </Center>

            <Heading
              m="4"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            />

            <Heading textAlign="center" my="4" fontSize="lg" children="Description" />
            <Text textAlign="center" my="4" children={lectures[lectureNumber].description} />
          </Box>

          <VStack
            spacing={0}
            maxH="80vh"
            overflowY="auto"
            borderLeft={['none', '1px solid rgba(0,0,0,0.2)']}
            w="full"
          >
            {lectures.map((element, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                  background: lectureNumber === index ? 'rgba(0,0,0,0.1)' : 'transparent',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
            ))}
          </VStack>
        </>
      ) : (
        <Center h="full">
          <Heading children="No Lectures" />
        </Center>
      )}
    </Grid>
  );
};

export default CoursePage;