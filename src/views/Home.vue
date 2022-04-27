<template>
  <div class="home">
    <CarouselCom />
    <v-container>
      <v-container>
        <v-row>
          <v-col cols="12" lg="12" sm="12">
            <h3 class="headline font-weight-medium text-center animated bounce">
              Product and Services
              <div class="divide"></div>
            </h3>
          </v-col>
        </v-row>

        <div>
          <carousel
            :items="items"
            :margin="margin"
            :nav="nav"
            :dots="dots"
            :responsive="responsive"
            :autoplay="autoPlay"
            class="pa-2 carousel"
          >
            <template slot="prev">
              <span class="prev">
                <v-icon color="white">mdi-chevron-left</v-icon>
              </span>
            </template>
            <template slot="next">
              <span class="next">
                <v-icon color="white">mdi-chevron-right</v-icon>
              </span>
            </template>
            <v-card
              height="550"
              v-for="card of cardContent"
              :key="card.id"
              elevation="4"
            >
              <v-img
                :src="card.cardImage"
                :lazy-src="card.cardImageLazy"
                height="270"
              ></v-img>

              <v-card-title class="subtitle-1 font-weight-medium">{{
                card.cardTitle
              }}</v-card-title>
              <v-card-text>
                {{ card.cardText }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="secondary"
                  text
                  class="text-center"
                  :to="card.route"
                >
                  {{ card.action }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </carousel>
        </div>
      </v-container>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="pa-3">
            <h1 class="text-center headline mb-2 font-weight-medium">
              About us
              <div class="divide"></div>
            </h1>
            <v-row align="center" justify="center">
              <v-col cols="12" lg="12" md="12" sm="12" offset-lg="1">
                <div class="pa-2">
                  <h3 class="subtitle-1 mb-8 animated slideInRight">
                    <span class="font-weight-medium">
                      ANTRUM ENGINEERING AND TECHNOLOGY COMPANY (NIGERIA)
                      LIMITED (AET) RC1246959</span
                    >
                    is a wholly Nigerian engineering company incorporated under
                    the laws of the Federal Republic of Nigeria to harness the
                    capacity to render Electrical Power Engineering, Management
                    and Consultancy Services having been successful with
                    executing several electrical projects with vast experience
                    garnered since 2005 from its conception and registration as
                    AET’ Company.
                  </h3>
                  <v-btn color="secondary" router to="/about">Read More</v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div>
            <v-row>
              <v-col cols="12" lg="12">
                <h3 class="text-center headline font-weight-medium">
                  Showcase
                  <div class="divide"></div>
                </h3>
                <div class="mt-2 text-center">
                  <h4 class="text-center font-weight-medium mb-5 grey--text">
                    Our work speaks more about us...
                  </h4>
                  <viewer :images="viewerImages">
                    <img
                      class="image"
                      v-for="src in viewerImages"
                      :src="src"
                      :key="src.id"
                      :alt="src.id"
                    />
                  </viewer>
                  <v-btn color="secondary" to="/gallery" class="mt-5"
                    >View More</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div>
      <v-container>
        <indus />
      </v-container>
    </div>

    <div class="secondary white--text">
      <v-container>
        <v-row>
          <v-col cols="12" lg="12" md="12" sm="12">
            <h3 class="subtitle-1 text-center">
              We see teamwork on every project as a key success element. The
              over-all project manager on each project knows to ensure efficient
              and regular communication to all stakeholders and at all levels.
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container>
      <Clients />
    </v-container>

    <div id="contact">
      <v-container>
        <h3 class="pa-3 text-center headline font-weigt-medium">
          Contact
          <div class="divide"></div>
        </h3>
        <Contact />
      </v-container>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import CarouselCom from "@/components/Carousel";
import Contact from "@/components/Contact";
import Clients from "@/components/Clients";
import Indus from "@/components/Indus";

export default {
  name: "Home",
  metaInfo() {
    return {
      title: "Home | Antrum Engineering.com",
      meta: [
        {
          name: "Home | Antrum Engineering.com",
        },
        {
          name: "keywords",
          content:
            "Aet, AET, AEt, Aet power, Antrum Engineering, Aet engineering power",
        },
      ],
    };
  },
  components: {
    carousel,
    CarouselCom,
    Clients,
    Indus,
    Contact,
  },
  data: () => ({
    items: 4,
    margin: 20,
    clientMargin: 20,
    nav: false,
    autoPlay: true,
    dots: false,
    responsive: {
      0: { items: 1, nav: false, dots: true },
      600: { items: 2, nav: false },
      768: { items: 3, nav: false },
    },
    clientItems: 4,
    clientResponsive: {
      0: { items: 3, nav: false },
      600: { items: 3, nav: false },
      768: { items: 4, nav: false },
    },
    show: false,
    viewerImages: [
      "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-3.jpg?alt=media&token=f44a8678-1f79-4f99-a09d-9db0166d5bf5",
      "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-8.jpg?alt=media&token=400f964d-2acb-460d-9edc-b2df7917c04e",
    ],
    cardContent: [
      {
        cardTitle: " Electrical Contracting Service",
        cardImage:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FpowerPlant.jpg?alt=media&token=cf0504d6-e755-4739-b974-d49cca3fbefe",
        cardImageLazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-1.jpg?alt=media&token=64fa3bae-1d6b-4fb1-b126-09677f93699a",
        cardText:
          "ANTRUM ENGINEERING is an experienced and reputable electrical contractor which provides professional electrical construction, installation testing and commissioning. We deliver project on time and within budget…..",

        action: "Read More",
        route: "/product",
      },
      {
        cardTitle: "Power Plant Development & Installations",
        cardImage:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2F3d.jpg?alt=media&token=c2617a76-94a4-4fca-9772-6490cc38969e",
        cardImageLazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2F3d-blur.jpg?alt=media&token=419afc0f-4c49-4b3d-93ed-a0f22298a9b5",
        cardText:
          "Every application (Industrial or Residential) has its peculiar power demand (requirement) which informs the requisite power solution to be implemented….",

        action: "Read More",
        route: "/product",
      },
      {
        cardTitle: `Power Infrastructure Management`,
        cardImage:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FpowerInfra.jpg?alt=media&token=28786c86-dc40-4a58-b9bb-eeee0169ddda",
        cardImageLazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-2.jpg?alt=media&token=2d37f080-79ee-4f88-b11c-a3f829ad38e4",
        cardText: `Proper power management is germane for reliable power and desirable equipment/ infrastructure useful life span. Adherence to the OEM’s (Original Equipment Manufacturer) operational and maintenance standards; use of requisite tools and relevant technology ensures a reliable system.
`,

        action: "Read More",
        route: "/product",
      },
      {
        cardTitle: "Electrical Panels",
        cardImage:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-10.jpg?alt=media&token=8baa552a-7fb3-4d64-9c71-b62d6118d20b",
        cardImageLazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-15.jpg?alt=media&token=64e751d7-9f56-4993-a5c8-517fc6c4b913",
        cardText:
          "For proper electrical gadget installation and standardisation, Electrical panel form an integral part of the installation from where trained personnel can monitor and control the functioning of…",

        action: "Read More",
        route: "/product",
      },
      {
        cardTitle:
          "Metering Service Provision – Specification, Supply & Installation",
        cardImage:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fsmart-meter%20(1).jpg?alt=media&token=20a33733-2dd9-49b5-b222-d0601c0b41c6",
        cardImageLazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-16.jpg?alt=media&token=3da95fb8-0f65-4a34-ae94-44f1c8c894c9",
        cardText:
          "Being accustomed to the Nigeria metering code, standards and specification in relation to the customer’s needs, AET has delivered successfully in metering service provision ranging from……",

        action: "Read More",
        route: "/product",
      },
      {
        cardTitle: "Solar Inverter System",
        cardImage:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FsolarPanels.jpg?alt=media&token=fcc8a7ba-902e-46e7-b7e0-39bb1649bc82",
        cardImageLazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-4.jpg?alt=media&token=929f9bd7-8508-43f0-9a0b-ceace7ae1c1e",
        cardText: `AET has several experiences in solar electrification and inverter for industries, hospital, pharmacy others where uninterruptible power is paramount.
          We offer installation, maintenance and supply of PV solar panel, batteries, inverters, charge…..
        `,

        action: "Read More",
        route: "/product",
      },
      {
        cardTitle: `Generator Maintenance and Escalation intervention`,
        cardImage:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FCAT-Big-Generator-Prices-in-Nigeria-nigeriantech.com_.ng_.jpg?alt=media&token=d939e65c-9a4d-4355-b79c-ed04abb96603",
        cardImageLazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-17.jpg?alt=media&token=71516845-0eb3-43be-a5e3-fdc24da6391f",
        cardText:
          "Good maintenance culture is key for an efficient diesel gen set unit. Rather than just filters and oil change, generator maintenance entails regular checks and part replacement at earmarked hours of operations as recommended by the OEM….",

        action: "Read More",
        route: "/product",
      },
      {
        cardTitle: "Rental power",
        cardImage:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Frental-power.jpg?alt=media&token=10ee5e2a-31f3-41d9-adf0-c3b990d10165",
        cardImageLazy:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-9.jpg?alt=media&token=c205f58e-8b4a-4e56-a071-d6a44822bfd3",
        cardText: `Emergency stop gap is inevitable for most application without redundancy of times of unplanned breakdowns, short term projects, such as construction / development works, upgrade works, others.
        Such requires dependable rugged generator to satisfy immediate needs with no hassles…
        `,

        action: "Read More",
        route: "/product",
      },
    ],
  }),
};
</script>

<style lang="scss" rel="stylesheet/scss">
.home {
  a {
    text-decoration: none;
  }

  .v-list .v-list-item--active {
    background: none !important;
    color: #fa7414 !important;
  }

  .owl-carousel .owl-stage {
    padding: 1em 0;
  }

  #contact {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-carrer.jpg?alt=media&token=3cb47d90-bf22-4b5a-b7f1-0b638ce5ba14")
        center center;
    color: #fff !important;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .image {
    width: calc(40% - 10px);
    cursor: pointer;
    margin: 5px;
    display: inline-block;
  }

  .v-card .v-image__image {
    transition: transform 0.5s ease;
  }

  .v-card:hover .v-image__image {
    transform: scale(1.1);
  }

  span.prev {
    z-index: 2;
    position: absolute;
    top: 1000px;
    background-color: #020740;
    color: #fff;
    left: 170px;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
  }
  span.next {
    z-index: 1;
    position: absolute;
    top: 1000px;
    background-color: #020740;
    color: #fff;
    right: 170px;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1028px) {
    span.prev {
      top: 1445px;
      left: 150px;
    }
    span.next {
      top: 1445px;
      right: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    .image {
      width: 50%;
      margin: 0;
      padding: 0.6em;
    }
  }

  @media only screen and (max-width: 480px) {
    .image {
      width: 33.3333%;
      margin: 0;
      padding: 0.6em;
    }
  }
}
</style>
