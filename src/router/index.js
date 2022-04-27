import Vue from "vue";
import VueRouter from "vue-router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import Meta from "vue-meta";
import Error404 from "../components/Error404.vue";

Vue.use(VueRouter);
Vue.use(Meta);

const lazyLoadView = ({ component, loading, error }) => {
  const AsyncHandler = () => ({
    component,
    loading,
    error,
  });

  return () =>
    Promise.resolve({
      functional: true,
      render(h, { data, children }) {
        return h(AsyncHandler, data, children);
      },
    });
};

const Home = lazyLoadView({
  component: import("../views/Home.vue"),
  loading: nProgress,
  error: Error404,
});

// const About = lazyLoadView({
//   component: import('../views/About.vue'),
//   loading: nProgress,
//   error: Error404,
// });

const Career = lazyLoadView({
  component: import("../views/Career.vue"),
  loading: nProgress,
  error: Error404,
});

const Product = lazyLoadView({
  component: import("../views/Product.vue"),
  loading: nProgress,
  error: Error404,
});

const Industry = lazyLoadView({
  component: import("../views/Industry.vue"),
  loading: nProgress,
  error: Error404,
});

const Gallery = lazyLoadView({
  component: import("../views/Gallery.vue"),
  loading: nProgress,
  error: Error404,
});

const Contact = lazyLoadView({
  component: import("../views/ContactView.vue"),
  loading: nProgress,
  error: Error404,
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // component: About,
  },
  {
    path: "/career",
    name: "Career",
    component: Career,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/industry",
    name: "Industry",
    component: Industry,
  },
  {
    path: "/*",
    name: "Error404",
    component: () => Error404,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    nProgress.start();
  }
  setTimeout(() => {
    next();
  }, 1000);
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
