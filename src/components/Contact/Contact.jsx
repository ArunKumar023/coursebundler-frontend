import {
  Button,
  Container,
  Grid,
  Heading,
  Input,
  Textarea,
  VStack,
  Spinner,
  Box,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactUs } from '../../redux/actions/other';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();

  const { error, message: stateMessage } = useSelector(state => state.other);

  const submitHandler = async e => {
    e.preventDefault();
    setSubmitting(true);
    await dispatch(contactUs(name, email, message));
    setSubmitting(false);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, stateMessage]);

  return (
    <Container h="92vh">
      <Grid placeItems="center" h="full">
        <VStack spacing="8" alignItems="flex-start">
          <Heading children="Contact Us" />

          <form onSubmit={submitHandler} style={{ width: '100%' }}>
            <VStack spacing="4" alignItems="flex-start">
              <Input
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                type="text"
                focusBorderColor="yellow.500"
              />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email Address"
                type="email"
                focusBorderColor="yellow.500"
              />
              <Textarea
                required
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Message"
                focusBorderColor="yellow.500"
              />
              <Button
                isLoading={submitting}
                my="4"
                colorScheme="yellow"
                type="submit"
              >
                {submitting ? <Spinner size="sm" /> : 'Send Mail'}
              </Button>
            </VStack>
          </form>

          <Box>
            Request for a course?{' '}
            <Link to="/request">
              <Button colorScheme="yellow" variant="link">
                Click here
              </Button>{' '}
            </Link>
          </Box>
        </VStack>
      </Grid>
    </Container>
  );
};

export default Contact;
