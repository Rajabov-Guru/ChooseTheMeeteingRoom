import React from 'react';
import { Button, Flex, Select, Text, Textarea } from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import useForm from '../Form/hooks/useForm';
import FormController from '../Form/FormController';
import { getFloors, getRooms, getTowers } from './dataHelper';

const commonStyles = {
  w: '100%',
  size: 'md',
};

interface FormData {
  tower: string;
  floor: string;
  room: string;
  date: Date | null;
  fromTime: string;
  toTime: string;
  comment: string;
}

const ReservationForm = () => {
  const handleSubmit = () => {
    console.log(formData);
  };

  const { formData, register, clear } = useForm<FormData>({
    tower: '',
    floor: '',
    room: '',
    date: null,
    fromTime: '',
    toTime: '',
    comment: '',
  });

  return (
    <form style={{ width: '100%' }}>
      <Flex direction="column" w="100%" maw="35rem" align="center" mx="auto" gap={25}>
        <Text my="2rem" size="xl" fw={700} align="center" tt="uppercase">
          Забронировать переговорную
        </Text>
        <FormController
          {...register('tower')}
          render={(value, setValue) => (
            <Select
              {...commonStyles}
              clearable
              placeholder="Башня"
              value={value}
              onChange={(changed) => setValue(changed)}
              data={getTowers()}
            />
          )}
        />
        <FormController
          {...register('floor')}
          render={(value, setValue) => (
            <Select
              {...commonStyles}
              clearable
              placeholder="Этаж"
              value={value}
              onChange={(changed) => setValue(changed)}
              data={getFloors()}
            />
          )}
        />
        <FormController
          {...register('room')}
          render={(value, setValue) => (
            <Select
              {...commonStyles}
              clearable
              placeholder="Переговорная"
              value={value}
              onChange={(changed) => setValue(changed)}
              data={getRooms()}
            />
          )}
        />
        <FormController
          {...register('date')}
          render={(value, setValue) => (
            <DateInput
              {...commonStyles}
              clearable
              placeholder="Дата"
              value={value}
              locale="ru"
              onChange={(changed) => setValue(changed ? new Date(changed) : changed)}
            />
          )}
        />
        <Flex justify="space-between" w="100%" gap="1rem">
          <FormController
            {...register('fromTime')}
            render={(value, setValue) => (
              <TimeInput
                {...commonStyles}
                label="С"
                withAsterisk
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )}
          />
          <FormController
            {...register('toTime')}
            render={(value, setValue) => (
              <TimeInput
                {...commonStyles}
                label="До"
                withAsterisk
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )}
          />
        </Flex>
        <FormController
          {...register('comment')}
          render={(value, setValue) => (
            <Textarea
              {...commonStyles}
              placeholder="Комментарий"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
        />
        <Flex justify="space-between" w="100%">
          <Button onClick={clear} color="red">
            Очистить
          </Button>
          <Button onClick={handleSubmit} color="green">
            Отправить
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default ReservationForm;
