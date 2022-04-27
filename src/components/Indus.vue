<template>
  <div class="indus">
    <h3 class="text-center headline font-weight-medium">
      Industry
      <div class="divide"></div>
    </h3>
    <v-row align="center" justify="center" class="mt-5">
      <v-col
        cols="12"
        lg="4"
        md="4"
        v-for="industry in industries"
        :key="industry.id"
        sm="12"
      >
        <v-card>
          <v-img
            height="250"
            :src="industry.image"
            :lazy-src="industry.lazy"
          ></v-img>
          <v-card-title class="subtitle-1 font-weight-medium">
            {{ industry.title }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    industries: [
      {
        title: "Real Estate",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-2.jpg?alt=media&token=a9f163f1-beee-4d75-a26d-ba41885d0ed1",
        lazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-2.jpg?alt=media&token=57ed2eba-0364-4103-a28e-04c9dea83393"
      },
      {
        title: "Commercial, Industrial & residential building",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-7.jpg?alt=media&token=645c2f33-f6b3-4ee1-9a57-89872b028285",
        lazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-7.jpg?alt=media&token=ee96644f-8a0b-4494-89f4-0bb1514f66e0"
      },
      {
        title: "Telecom",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-5.jpg?alt=media&token=dbac563f-f876-4b2a-992c-9a3bcb2e90f5",
        lazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-5.jpg?alt=media&token=e1ded4bc-9b6b-42b0-ae0b-4637a58d5661"
      },
      {
        title: "Manufacturing and Pharmaceuticals",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-4.jpg?alt=media&token=17e103c2-ab59-46ca-aad7-e283f62d6d3c",
        lazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-4.jpg?alt=media&token=20ae48b4-0d80-4598-8377-0e12396b78ef"
      },
      {
        title: "Hospital",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-1.jpg?alt=media&token=8934c880-6d39-4cf5-9b6d-166ece9c9bb3",
        lazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-1.jpg?alt=media&token=688578e6-311a-4c76-8284-ba618cc596f9"
      },
      {
        title: "Media House",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-6.jpg?alt=media&token=9fa2240d-ac10-4bf6-b7b0-3b4723d8d101",
        lazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-6.jpg?alt=media&token=8135a053-98ec-431f-9ff0-db1e2c7e18a4"
      },
      {
        title: "Agriculture",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-8.jpg?alt=media&token=bb27e320-62bc-42b2-8c72-edf06d338c06",
        lazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-8.jpg?alt=media&token=09207f17-fba2-4122-80f5-aa7f6f622686"
      },
      {
        title: "Food and Beverages",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-3.jpg?alt=media&token=67ba7034-f300-40be-9ca9-df0df3c59c4b",
        lazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-3.jpg?alt=media&token=a96cbd73-ca16-4ecc-987c-8c7e9d3cdf98"
      }
    ]
  })
};
</script>

<style>
</style>