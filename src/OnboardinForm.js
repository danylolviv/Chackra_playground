import React from 'react';
import { Box } from "@chakra-ui/core";
import { Select } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import {Icon, Stack, InputGroup,  InputLeftElement, InputRightElement, Input } from "@chakra-ui/core";


export const OnboardingForm = () => (
    <div class="boxit">
      <Box bg="white" w="60%" p={4} color="1D1D1D" borderWidth="2px" rounded="lg" h="80%">
      <Heading as="h4" size="md">
      Выберите условия остановки
      </Heading>
      <Heading as="h6" size="xs">
        Культура:
      </Heading>
      <Select color="gray.300" placeholder="Все">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Heading as="h6" size="xs">
        Тип операции:
      </Heading>
      <Select color="gray.300" placeholder="Все">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Heading as="h6" size="xs">
        Клиент:
      </Heading>
      <Select color="gray.300" placeholder="Все">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Heading as="h6" size="xs">
        Время:
      </Heading>
      <CheckboxGroup variantColor="green" defaultValue={["naruto", "kakashi"]}>
        <Checkbox value="undef">Неопределенное до возобновления</Checkbox>
        <Checkbox value="state_period">Указать период остановки</Checkbox>
      </CheckboxGroup>
      
      <Stack spacing={1} width="40%">
        <InputGroup>
          <InputLeftElement color="gray.300" fontSize="1.2em"  />
          <Input placeholder="Enter amount" />
          <InputRightElement children={<Icon name="calendar" color="green.500" />} />
        </InputGroup>
        <InputGroup>
          <InputLeftElement color="gray.300" fontSize="1.2em"  />
          <Input placeholder="Enter amount" />
          <InputRightElement children={<Icon name="calendar" color="green.500" />} />
        </InputGroup>
      </Stack>

      <Button variantColor="red" width="100%">Button</Button>
      </Box>
      </div>
);

