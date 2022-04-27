<template>
  <div class="clients">
    <h3 class="text-center my-4 headline font-weight-medium">
      Our Beautiful Clients
      <div class="divide"></div>
    </h3>
    <carousel
      :items="clientItems"
      :margin="clientMargin"
      :nav="nav"
      :responsive="clientResponsive"
      :autoplay="autoPlay"
      class="pa-2"
    >
      <v-img
        v-for="(client, index) in clientsImage"
        :key="index"
        :alt="client.id"
        :src="client.image"
      ></v-img
    ></carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Clients",
  components: {
    carousel
  },
  data: () => ({
    clientItems: 4,
    clientResponsive: {
      0: { items: 3, nav: false },
      600: { items: 3, nav: false },
      768: { items: 4, nav: false }
    },
    clientMargin: 20,
    nav: false,
    autoPlay: true,
    clientsImage: [
      {
        id: "Client 1",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-1.jpg?alt=media&token=45df49dd-ed15-48d7-a976-d84f41a8130d"
      },
      {
        id: "Client 2",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-2.jpg?alt=media&token=892ff47e-745a-4c2e-a99a-0c15aae967ed"
      },
      {
        id: "Client 3",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-3.jpg?alt=media&token=e6feb5bd-5d9d-4eef-b0dc-82747f5d6288"
      },
      {
        id: "Client 4",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-4.jpg?alt=media&token=ed6584bd-e29f-4229-87eb-f3f7e7282e70"
      },
      {
        id: "Client 5",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-5.jpg?alt=media&token=69e6ae09-e68b-4101-8106-90b7a1e642dd"
      },
      {
        id: "Client 6",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-6.jpg?alt=media&token=95dfa127-5832-4f4e-ab6e-0c387786b320"
      },
      {
        id: "Client 7",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-7.jpg?alt=media&token=d3065474-c620-4c2f-946e-0ecf4ff5ac9e"
      },
      {
        id: "Client 8",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-8.jpg?alt=media&token=0d8351cc-9601-488f-9706-8ec67fbc30aa"
      },
      {
        id: "Client 9",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-9.jpg?alt=media&token=6a71c596-d079-4ba7-b5a9-1c4b43bc901a"
      },
      {
        id: "Client 10",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-10.jpg?alt=media&token=0917df94-fc3a-4911-b17e-a9dd80673e33"
      },
      {
        id: "Client 11",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-11.jpg?alt=media&token=8675312e-d7d4-4591-a70e-109f94417b9b"
      },
      {
        id: "Client 12",
        image:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-12.jpg?alt=media&token=ec3687e5-2221-4ace-9508-a7c81fbe3cf0"
      },
      {
        id: 'Client 13',
        image: 'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-13.jpg?alt=media&token=1e0c5f69-4c8c-4daa-bf4a-58410c3320f7'
      },
      {
        id: 'Client 14',
        image: 'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-14.jpg?alt=media&token=1d62087a-20dc-4e8c-b55e-48549f7eb868'
      },
      {
        id: 'Client 15',
        image: 'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-15.png?alt=media&token=323fff38-d204-4710-b47f-f662dc794f26'
      },
      {
        id: 'Client 16',
        image: 'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-16.png?alt=media&token=3154c8f4-2d91-45e5-8ca8-f312c609376f'
      }
    ]
  })
};
</script>

<style lang="scss">
  .clients {
    .owl-dots {
      .owl-dot {
        span {
          width: 8px;
          height: 8px;
        }
      }
    }
  }
</style>