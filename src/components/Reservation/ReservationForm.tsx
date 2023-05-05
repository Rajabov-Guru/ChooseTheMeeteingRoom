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
          render={(setValue) => (
            <Select
              {...commonStyles}
              clearable
              placeholder="Башня"
              value={formData.tower}
              onChange={(value) => setValue(value)}
              data={getTowers()}
            />
          )}
        />
        <FormController
          {...register('floor')}
          render={(setValue) => (
            <Select
              {...commonStyles}
              clearable
              placeholder="Этаж"
              value={formData.floor}
              onChange={(value) => setValue(value)}
              data={getFloors()}
            />
          )}
        />
        <FormController
          {...register('room')}
          render={(setValue) => (
            <Select
              {...commonStyles}
              clearable
              placeholder="Переговорная"
              value={formData.room}
              onChange={(value) => setValue(value)}
              data={getRooms()}
            />
          )}
        />
        <FormController
          {...register('date')}
          render={(setValue) => (
            <DateInput
              {...commonStyles}
              clearable
              placeholder="Дата"
              value={formData.date}
              locale="ru"
              onChange={(value) => setValue(value ? new Date(value) : value)}
            />
          )}
        />
        <Flex justify="space-between" w="100%" gap="1rem">
          <FormController
            {...register('fromTime')}
            render={(setValue) => (
              <TimeInput
                {...commonStyles}
                label="С"
                withAsterisk
                value={formData.fromTime}
                onChange={(e) => setValue(e.target.value)}
              />
            )}
          />
          <FormController
            {...register('toTime')}
            render={(setValue) => (
              <TimeInput
                {...commonStyles}
                label="До"
                withAsterisk
                value={formData?.toTime}
                onChange={(e) => setValue(e.target.value)}
              />
            )}
          />
        </Flex>
        <FormController
          {...register('comment')}
          render={(setValue) => (
            <Textarea
              {...commonStyles}
              placeholder="Комментарий"
              value={formData.comment}
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
