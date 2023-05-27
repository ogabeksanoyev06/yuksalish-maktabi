<template>
  <section class="section py-30">
    <div class="container">
      <loader v-if="loading" />
      <div class="main-content" data-aos="fade-up" v-else>
        <h1 class="title mb-20">
          {{ list[$localeKey("name")] }}
        </h1>
        <div class="single-page">
          <div class="info d-flex align-center justify-space-between">
            <div class="left-info">
              <!-- <span>
                <i>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.75">
                      <path
                        d="M12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3Z"
                        stroke="#4C985D"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                      ></path>
                      <path
                        d="M12 6V12.75H16.5"
                        stroke="#4C985D"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </i>
                16:18 - 1 May 2023
              </span> -->
              <router-link to="/news" class="cat-news">
                <i>
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V14.6439L4.01522 8.9847C4.41647 8.0818 5.31177 7.5 6.29975 7.5H19.5V6C19.5 5.17157 18.8284 4.5 18 4.5H11C10.8674 4.5 10.7402 4.44732 10.6464 4.35355L8.23223 1.93934C7.95093 1.65804 7.5694 1.5 7.17157 1.5H3ZM20.5 7.5H20.9225C22.7316 7.5 23.9418 9.3621 23.207 11.0153L20.9848 16.0153C20.5835 16.9182 19.6882 17.5 18.7003 17.5H3C1.61929 17.5 0.5 16.3807 0.5 15V3C0.5 1.61929 1.61929 0.5 3 0.5H7.17157C7.83461 0.5 8.4705 0.76339 8.93934 1.23223L11.2071 3.5H18C19.3807 3.5 20.5 4.61929 20.5 6V7.5ZM1.95695 16.078C2.22689 16.3392 2.59467 16.5 3 16.5H18.7003C19.293 16.5 19.8302 16.1509 20.071 15.6092L22.2932 10.6092C22.7341 9.6173 22.008 8.5 20.9225 8.5H6.29975C5.70696 8.5 5.16978 8.8491 4.92903 9.3908L1.95695 16.078Z"
                      fill="#3973A9"
                    ></path>
                  </svg>
                </i>
                {{ $t("NewsTitle") }}
              </router-link>
            </div>
            <span>
              <i>
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9995 0C14.7271 0 17.3352 1.43062 19.7658 3.78115C20.595 4.58305 21.3452 5.43916 22.0056 6.29562C22.4041 6.81244 22.6871 7.21899 22.842 7.4612L23.1866 8L22.842 8.5388C22.6871 8.78101 22.4041 9.18756 22.0056 9.70438C21.3452 10.5608 20.595 11.417 19.7658 12.2189C17.3352 14.5694 14.7271 16 11.9995 16C9.27199 16 6.66386 14.5694 4.23324 12.2189C3.40403 11.417 2.65384 10.5608 1.99344 9.70438C1.59494 9.18756 1.31201 8.78101 1.1571 8.5388L0.8125 8L1.1571 7.4612C1.31201 7.21899 1.59494 6.81244 1.99344 6.29562C2.65384 5.43916 3.40403 4.58305 4.23324 3.78115C6.66386 1.43062 9.27199 0 11.9995 0ZM20.4218 7.51688C19.8171 6.73272 19.1297 5.9482 18.3755 5.21885C16.282 3.19438 14.1046 2 11.9995 2C9.89446 2 7.71703 3.19438 5.62357 5.21885C4.86937 5.9482 4.18192 6.73272 3.57728 7.51688C3.44669 7.68624 3.32602 7.84782 3.2157 8C3.32602 8.15218 3.44669 8.31376 3.57728 8.48312C4.18192 9.26728 4.86937 10.0518 5.62357 10.7811C7.71703 12.8056 9.89446 14 11.9995 14C14.1046 14 16.282 12.8056 18.3755 10.7811C19.1297 10.0518 19.8171 9.26728 20.4218 8.48312C20.5524 8.31376 20.673 8.15218 20.7834 8C20.673 7.84782 20.5524 7.68624 20.4218 7.51688ZM11.9995 12C9.7904 12 7.99953 10.2091 7.99953 8C7.99953 5.79086 9.7904 4 11.9995 4C14.2087 4 15.9995 5.79086 15.9995 8C15.9995 10.2091 14.2087 12 11.9995 12ZM11.9995 10C13.1041 10 13.9995 9.10457 13.9995 8C13.9995 6.89543 13.1041 6 11.9995 6C10.895 6 9.99953 6.89543 9.99953 8C9.99953 9.10457 10.895 10 11.9995 10Z"
                    fill="#4C985D"
                  ></path>
                </svg>
              </i>
              79
            </span>
          </div>
          <div class="content-wrap">
            <!-- <p>
              Bugun Davlat xizmatini rivojlantirish agentligi va Davlat
              boshqaruvi akademiyasi hamkorligida shu mavzuda davra suhbati
              tashkil etildi.
            </p> -->
            <div class="img-wrap">
              <img :src="'http://yuksalishmaktabi.uz' + list.img" alt="" />
            </div>
            <div>
              <p>
                {{ list[$localeKey("title")] }}
              </p>
            </div>

            <div class="bottom">
              <div class="share-wrap">
                <ul class="share">
                  <li>
                    <p>Ulashish:</p>
                  </li>
                  <div class="d-flex flex-wrap">
                    <li class="fb">
                      <a
                        href="javascript:void(0)"
                        class="share-network-facebook"
                      >
                        <svg
                          width="7"
                          height="16"
                          viewBox="0 0 7 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.54608 15.0338C2.53617 15.029 3.52614 14.9957 4.51572 14.9339V8.08014H6.48605L6.72408 5.61723H4.51572V4.0533C4.51572 3.70788 4.79756 3.42788 5.14527 3.42788H6.72408V0.964844H4.22674C2.7462 0.964844 1.54608 2.15721 1.54608 3.62803V5.61723H0.103394V8.08014H1.54608V15.0338Z"
                            fill="#6A7793"
                          ></path>
                        </svg>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li class="tg">
                      <a
                        href="javascript:void(0)"
                        class="share-network-telegram"
                      >
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.49349 7.9088L5.2619 11.2592C5.59324 11.2592 5.73674 11.1128 5.90883 10.937L7.46228 9.41L10.6812 11.8346C11.2715 12.173 11.6875 11.9948 11.8467 11.276L13.9596 1.09284L13.9602 1.09224C14.1474 0.194642 13.6446 -0.156356 13.0694 0.063843L0.649953 4.95442C-0.197651 5.29282 -0.184817 5.77881 0.505866 5.99901L3.68103 7.01481L11.0563 2.26823C11.4034 2.03183 11.719 2.16263 11.4594 2.39903L5.49349 7.9088Z"
                            fill="#6A7793"
                          ></path>
                        </svg>
                        <span>Telegram</span>
                      </a>
                    </li>
                    <li class="tw">
                      <a
                        href="javascript:void(0)"
                        class="share-network-twitter"
                      >
                        <svg
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 1.06548C11.558 1.24623 11.084 1.36798 10.5855 1.42344C11.0943 1.14215 11.485 0.696472 11.6684 0.166605C11.1929 0.426677 10.6652 0.615821 10.1047 0.717463C9.65607 0.275539 9.0161 0 8.30813 0C6.94823 0 5.84593 1.01731 5.84593 2.27193C5.84593 2.4498 5.86796 2.62304 5.91034 2.78964C3.86425 2.69485 2.04992 1.79023 0.835338 0.415629C0.623451 0.751933 0.502304 1.14237 0.502304 1.55844C0.502304 2.34662 0.936134 3.04176 1.59741 3.44988C1.19327 3.43795 0.814269 3.33564 0.482433 3.16528C0.482433 3.175 0.482433 3.18428 0.482433 3.19423C0.482433 4.2955 1.33094 5.21249 2.45646 5.42241C2.25055 5.47455 2.03292 5.50195 1.80834 5.50195C1.64937 5.50195 1.49494 5.48781 1.34435 5.46085C1.65871 6.3626 2.56731 7.02084 3.64446 7.03918C2.80242 7.64838 1.74083 8.0112 0.587059 8.0112C0.387622 8.0112 0.192255 8.00059 0 7.97938C1.08888 8.62436 2.38367 9 3.77375 9C8.30239 9 10.7792 5.53797 10.7792 2.53642C10.7792 2.43743 10.7766 2.33888 10.772 2.2421C11.2528 1.92171 11.6703 1.5211 12 1.06548Z"
                            fill="#6A7793"
                          ></path>
                        </svg>
                        <span>Twitter</span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
              <div class="print d-flex align-items-center">
                <i>
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M17.25 17.25H18.3281C18.8042 17.2485 19.2605 17.0505 19.5971 16.6992C19.9338 16.3479 20.1236 15.8718 20.125 15.375V7.875C20.1236 7.37818 19.9338 6.90212 19.5971 6.55081C19.2605 6.1995 18.8042 6.00148 18.3281 6H4.67188C4.19575 6.00148 3.73953 6.1995 3.40286 6.55081C3.06619 6.90212 2.87642 7.37818 2.875 7.875V15.375C2.87642 15.8718 3.06619 16.3479 3.40286 16.6992C3.73953 17.0505 4.19575 17.2485 4.67188 17.25H5.75"
                        stroke="#3973A9"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M16.1575 11.25H6.8425C6.23913 11.25 5.75 11.7604 5.75 12.39V19.86C5.75 20.4896 6.23913 21 6.8425 21H16.1575C16.7609 21 17.25 20.4896 17.25 19.86V12.39C17.25 11.7604 16.7609 11.25 16.1575 11.25Z"
                        stroke="#3973A9"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M17.25 6V4.875C17.2486 4.37818 17.0588 3.90212 16.7221 3.55081C16.3855 3.1995 15.9292 3.00148 15.4531 3H7.54688C7.07075 3.00148 6.61454 3.1995 6.27786 3.55081C5.94119 3.90212 5.75142 4.37818 5.75 4.875V6"
                        stroke="#3973A9"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M17.6094 9.75C18.2048 9.75 18.6875 9.24632 18.6875 8.625C18.6875 8.00368 18.2048 7.5 17.6094 7.5C17.0139 7.5 16.5312 8.00368 16.5312 8.625C16.5312 9.24632 17.0139 9.75 17.6094 9.75Z"
                        fill="#3973A9"
                      ></path>
                    </g>
                  </svg>
                </i>
                <button @click="printPage">Chop etish</button>
              </div>
            </div>
          </div>

          <div class="archive-news" style="margin-top: 30px">
            <h3 class="title ico mb-20">
              <span>Shu turdagi yangiliklar</span>
            </h3>
            <div class="items">
              <div class="inner">
                <div
                  class="item"
                  v-for="item in news"
                  :key="item.id"
                  @click="goToLink(item.id)"
                >
                  <div class="item-img">
                    <img :src="'http://yuksalishmaktabi.uz' + item.img" />
                  </div>
                  <p>
                    <span>
                      <i>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.75">
                            <path
                              d="M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2Z"
                              stroke="#717171"
                              stroke-width="1.2"
                              stroke-miterlimit="10"
                            ></path>
                            <path
                              d="M8 4V8.5H11"
                              stroke="#717171"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g></svg
                      ></i>
                      14:52 - 2 May 2023
                    </span>
                    <span class="cat-name"> {{ $t("NewsTitle") }}</span>
                  </p>
                  <h6 class="title">
                    {{ item[$localeKey("name")] }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Loader from "@/components/shared-components/Loader.vue";
export default {
  name: "AppNewsDetailed",
  components: { Loader },
  data() {
    return {
      list: {},
      news: [],
      loading: true,
    };
  },
  methods: {
    async getNewsId() {
      this.loading = true;
      try {
        await this.$api
          .get(`news/${this.$route.params.newsId}`)
          .then((data) => {
            if (!data.error && data) {
              this.list = data[0];
            }
          })
          .catch((error) => {
            console.log("Error on getting News" + ": " + error);
            this.loading = false;
          })
          .finally(() => {
            this.loading = false;
          });
      } catch (e) {
        console.log(e);
      }
    },
    async getNews() {
      try {
        await this.$api
          .get(`news/`)
          .then((data) => {
            if (!data.error && data) {
              this.news = [];
              data.forEach((element) => {
                console.log(element);
                if (element.id != this.$route.params.newsId) {
                  this.news.push(element);
                }
              });
            }
          })
          .catch((error) => {
            console.log("Error on getting News" + ": " + error);
          })
          .finally(() => {});
      } catch (e) {
        console.log(e);
      }
    },
    goToLink(id) {
      this.$router.push({
        name: "detailed-news",
        params: { newsId: id },
      });
    },
    printPage() {
      window.print();
    },
  },
  watch: {
    $route() {
      this.getNewsId();
      this.getNews();
    },
  },
  mounted() {
    this.$route.params.newsId;
    this.getNewsId();
    this.getNews();
  },
  created() {},
};
</script>
<style lang="scss" scoped>
h1.title,
h3.title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #272727;
}
.main-content {
  .info {
    padding: 12px 0;
    border-top: 1px solid rgba(14, 49, 120, 0.2);
    margin-bottom: 8px;
    .left-info {
      display: flex;
      align-items: center;
    }
    i {
      margin-right: 6px;
    }
    span {
      font-size: 0.9rem;
      font-weight: 500;
      color: #79838e;
      display: flex;
      align-items: center;
    }
    .cat-news {
      font-size: 0.9rem;
      font-weight: 500;
      color: #3973a9;
      margin-left: 16px;
      display: flex;
      align-items: center;
    }
  }
  .content-wrap {
    p {
      font-weight: 500;
      font-size: 1.1rem;
      color: #79838e;
      text-align: justify;
      line-height: 150%;
      margin-bottom: 15px;
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;
      padding: 20px 0;
      border-top: 1px solid rgba(14, 49, 120, 0.2);
      .share {
        display: flex;
        align-items: center;
        li {
          cursor: pointer;
          margin-right: 8px;
          transition: transform 0.3s ease;
          &:hover {
            transform: translateY(-4px);
          }
          a {
            display: flex;
            align-items: center;
            background: rgba(49, 101, 203, 0.1);
            border-radius: 4px;
            padding: 0 8px;
            cursor: pointer;
            line-height: 24px;
            span {
              padding-left: 8px;
              color: #3973a9;
              transition: all 0.3s;
              font-size: 0.7rem;
              font-weight: 500;
            }
          }
        }
        p {
          margin-bottom: 0px;
        }
      }
      .print {
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #717171;
        font-size: 0.9rem;
        cursor: pointer;
        i {
          margin-right: 6px;
        }
      }
    }
  }
  .img-wrap {
    margin-bottom: 30px;
    img {
      border-radius: 8px;
      margin-bottom: 15px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: auto;
      max-width: 100%;
      height: auto;
    }
  }
  .archive-news .items .inner {
    display: flex;
    flex-wrap: wrap;
    .item {
      max-width: 250px;
      width: 100%;
      margin-bottom: 15px;
      margin-right: 15px;
      display: block;
      background: transparent;
      box-shadow: 0 2px 4px transparent, 0 6px 20px transparent;
      position: relative;
      margin-top: 0;
      cursor: pointer;
      transition: all 0.3s;
      &:last-child {
        margin-right: 0px;
      }
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08),
          0 6px 20px rgba(0, 0, 0, 0.04);
        background: #fff;
        transform: translateY(-6px);
      }
      .item-img {
        transition: all 0.3s;
        display: block;
        margin-bottom: 12px;
        height: 150px;
        img {
          height: 150px;
          -o-object-fit: cover;
          object-fit: cover;
          width: 100%;
        }
      }
      p {
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.75rem;
        font-weight: 500;
        padding: 10px;
        .cat-name {
          color: #4c985d;
        }
        span {
          display: flex;
          align-items: center;
          color: #717171;
          i {
            margin-right: 5px;
          }
        }
      }
      .title {
        color: #272727;
        font-size: 1rem;
        line-height: 1.3;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding: 10px;
      }
    }
  }
}
@media (max-width: 991px) {
  h1.title {
    font-size: 1.4rem;
  }
  .main-content .content-wrap p {
    font-size: 1rem;
  }
}
@media (max-width: 768px) {
  h1.title,
  h3.title {
    font-size: 1.1rem;
  }
  .main-content .content-wrap p {
    font-size: 0.9rem;
  }
}
@media (max-width: 500px) {
  .main-content .info .left-info {
    flex-direction: column;
    align-items: stretch;
    .cat-news {
      margin-left: 0px !important;
      margin-top: 6px;
    }
  }
  .main-content .content-wrap .bottom {
    flex-direction: column;
    align-items: flex-start;
    .share {
      flex-direction: column;
      align-items: flex-start;
      li {
        margin-bottom: 5px;
      }
    }
    .print {
      margin-top: 5px;
    }
  }
}
</style>
