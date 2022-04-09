import { AspectRatio, Card, Group, Image, Text, Title } from '@mantine/core';
import useStyles from 'components/atoms/CardMerchant/styles';
import { Star } from 'tabler-icons-react';
import Location from 'assets/icons/Location';

type Props = {
  name: string;
  img: string;
  cats: string[];
  rating: number;
  distance: number;
};

export function CardMerchant(props: Props) {
  const { name, img, cats, rating, distance } = props;
  const { classes, theme } = useStyles();

  return (
    <Card shadow="sm" className={classes.root}>
      <AspectRatio ratio={296 / 146}>
        <Image src={img} alt={name} className={classes.img} />
      </AspectRatio>
      <Title order={3} className={classes.title}>
        {name}
      </Title>
      <Text className={classes.cats}>{cats}</Text>
      <Group spacing={12}>
        <Group spacing={4}>
          <Star color={theme.colors.yellow[5]} />
          <Text>{rating}</Text>
        </Group>
        <Group spacing={4}>
          <Location color="red" />
          <Text>{distance}</Text>
        </Group>
      </Group>
    </Card>
  );
}
