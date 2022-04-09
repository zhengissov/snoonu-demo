import type { NextPage } from 'next';
import { AppTemplate } from 'components/templates/AppTemplate';
import { Container, SimpleGrid } from '@mantine/core';
import { CardMerchant } from 'components/atoms/CardMerchant';

const Home: NextPage = () => (
  <AppTemplate>
    <Container size="xl">
      Index Page
      <SimpleGrid cols={4} spacing={24}>
        <CardMerchant
          name="Oak Berry"
          img="https://cdn.vox-cdn.com/thumbor/95eGE2BlhQRHOfMm9Z3RRVxBO4k=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22525632/PXL_20210515_022542440.PORTRAIT_2.jpg"
          cats={['American, Burgers, Milkshakes']}
          rating={5.0}
          distance={0.55}
        />
        <CardMerchant
          name="Oak Berry"
          img="https://cdn.vox-cdn.com/thumbor/95eGE2BlhQRHOfMm9Z3RRVxBO4k=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22525632/PXL_20210515_022542440.PORTRAIT_2.jpg"
          cats={['American, Burgers, Milkshakes']}
          rating={5.0}
          distance={0.55}
        />
        <CardMerchant
          name="Oak Berry"
          img="https://cdn.vox-cdn.com/thumbor/95eGE2BlhQRHOfMm9Z3RRVxBO4k=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22525632/PXL_20210515_022542440.PORTRAIT_2.jpg"
          cats={['American, Burgers, Milkshakes']}
          rating={5.0}
          distance={0.55}
        />
      </SimpleGrid>
    </Container>
  </AppTemplate>
);

export default Home;
