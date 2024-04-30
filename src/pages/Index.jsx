import React, { useState } from "react";
import { Box, Button, Container, Heading, Text, VStack, Input, List, ListItem, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [workouts, setWorkouts] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddWorkout = () => {
    if (input === "") {
      toast({
        title: "Error",
        description: "Workout description can't be empty",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setWorkouts([...workouts, input]);
    setInput("");
  };

  const handleDeleteWorkout = (index) => {
    const newWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(newWorkouts);
  };

  return (
    <Container maxW="container.md" p={5}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">CrossFit Tracker</Heading>
          <Text mt={4}>Track your daily CrossFit workouts!</Text>
        </Box>
        <Box>
          <Input placeholder="Add new workout" value={input} onChange={(e) => setInput(e.target.value)} size="md" />
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddWorkout} mt={2}>
            Add Workout
          </Button>
        </Box>
        <Box>
          <List spacing={3}>
            {workouts.map((workout, index) => (
              <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
                {workout}
                <IconButton icon={<FaTrash />} aria-label="Delete workout" colorScheme="red" onClick={() => handleDeleteWorkout(index)} />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
