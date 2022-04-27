<template>
  <div class="about">
    <header>
      <v-container>
        <div class="sec">
          <v-row align="center" justify="center" class="fill-height">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-medium mb-4 animated bounce">
                <span class="accent--text">About</span>
                <span> AET</span>
              </h1>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </header>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="12" md="12" sm="12">
          <div class="pa-2">
            <h3 class="subtitle-1 mb-8">
              <span class="font-weight-medium">
                ANTRUM ENGINEERING AND TECHNOLOGY COMPANY (NIGERIA) LIMITED
                (AET) RC1246959</span
              >
              is a wholly Nigerian engineering company incorporated under the
              laws of the Federal Republic of Nigeria with Electrical Power
              Engineering, Management and Consultancy Services having been
              successful with executing several electrical projects with vast
              experience garnered since 2005 from its conception and
              registration as AET’ Company.
            </h3>
            <h3 class="subtitle-1 mb-8">
              <span class="font-weight-medium">AET</span> has continued to
              maintain its brand as a top notch custom solution provider by
              investigating and analysing the need (problem definition) and
              proffering the appropriate solution, issuing diligent technical
              advises and carrying out installations that stand the test of
              time. We see teamwork as a key element of success; as such imbed
              it in our methodology. We ensure efficient and regular
              communication to all stakeholders and at all levels. We value life
              and properties; hence we adhere to Environmental Health & Safety
              HSE measures in our approach& practises and as well maintain our
              policy.
            </h3>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div id="next">
      <v-container>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" lg="5" md="5" sm="12">
            <v-img
              class="mx-auto mb-7"
              src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-Vision.svg?alt=media&token=673261c3-311f-4d34-8f6c-b093ae8059c1"
              width="230"
              lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-V-blur.svg?alt=media&token=99bf0370-7138-4d45-974c-2d8b4e85df1d"
            >
            </v-img>
            <p class="mt-3 px-3">
              To be a Leading Electrical Power Engineering Solution & Service
              Provider.
            </p>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12" offset-lg="1" offset-md="1">
            <v-img
              class="mx-auto mb-7"
              src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-M.svg?alt=media&token=b6278719-3591-4b10-9583-69a7431c65be"
              width="220"
              lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FAET-M-blur.svg?alt=media&token=8745a4ca-c1ee-4abb-a5c2-193f17d69a07"
            >
            </v-img>
            <p class="mt-3 px-3">
              To consistently offer meticulous solutions that conform to
              statutory engineering practices, codes of conduct and with
              integrity to requisite challenges in Electrical Power Engineering
              for our valued clients.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="white grey--text">
      <v-container>
        <h2 class="font-weight-medium grey--text text--darken-3 text-center">
          Core Values
          <div class="divide"></div>
        </h2>
        <Values />
      </v-container>
    </div>

    <v-container>
      <template>
        <v-divider></v-divider>
      </template>

      <v-row class="mt-5">
        <v-col cols="12" lg="6" md="6" sm="12">
          <h2 class="font-weight-medium mb-3 mt-6">
            Ownership, Structure and Management
            <div class="ml-0 divide"></div>
          </h2>
          <p class="subtitle-1">
            The company is a Strong Matrix Structured Firmwith a dynamic team
            led by the Managing Director and CEO, Engr. Lawal Ganiyu (MNSE,
            MPMI, COREN) with able co-directors; Engr. Yisa Salau (COREN, MNSE,
            MNiMechE), Dr. Olalekan Olamide (M.Sc, PhD Bio-Energy) amongst
            others and well-meaning top ranked staff members for efficient
            management.
          </p>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <h2 class="font-weight-medium mb-3 text-right">
            Approach
            <div class="divide mr-0"></div>
          </h2>
          <p class="subtitle-1">
            AET believes understanding the job requirement and specification
            comes first. Our team develops and applies the best strategy and
            solution that meet the requirement with recognition of the HSE
            standard and statutory practices, codes of conduct and integrity
            that applies. We conclude every project ensuring the customer is
            satisfied with the service delivered. AET believes in a hands-on
            approach on all projects. That is why a top manager of the firm has
            always been in control of the key functions on our projects. AET is
            equipped with the necessary human resources and others to ensure the
            best professional service is provided at all times.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <div class="text-center">
      <button class="my-5">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/Profile%2FAET%20PROFILE%20FEB%202021%20FINAL.pdf?alt=media&token=a4f244ea-5d85-4608-8bb5-a306bace4fcd"
          download="Profile"
          >Download Company's Profile</a
        >
      </button>
    </div>
  </div>
</template>

<script>
import Values from "@/components/Values";

export default {
  name: "About",
  components: {
    Values,
  },
  metaInfo() {
    return {
      title: "About | Antrum Engineering.com",
      meta: [
        {
          name: "About | Antrum Engineering.com",
        },
        {
          name: "keywords",
          content:
            "Aet, AET, AEt, Aet power, Antrum Engineering, Aet engineering, About AET",
        },
      ],
    };
  },
  methods: {
    downloadPDF() {
      window.location.href = "@/assets/company-profile.pdf";
    },
  },
};
</script>

<style lang="scss">
.about {
  .v-image__image .v-image__image--cover:hover {
    transform: scale(1.5);
  }
  #next {
    background-color: #fff;
  }
  header {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fsec-images%2FAET.jpg?alt=media&token=2f548b7d-b793-45f6-a280-145fa908fb9f")
        center center;
    color: #fff;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 480px) {
    header {
      height: 30vh;
    }
  }
}
</style>
