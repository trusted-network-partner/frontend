<template>
  <div class="calendar-info-wrap">
    <div class="calendar-info__section">
      <div class="calendar-info__section-title font-bold">
        {{ $t("on_hold") }}
      </div>
      <div
        v-for="task in tasks.hold"
        :key="task.id"
        class="calendar-info__item"
      >
        <div class="calendar-info__title">
          {{ task.title }}
        </div>
        <div class="calendar-info__status" :class="task.status">
          <div class="calendar-info__status-inner">
            <span class="calendar-info__status-title">
              {{ task.status }}
            </span>
          </div>
        </div>
        <div class="calendar-info__priority" :class="task.priority">
          <div class="calendar-info__priority-inner">
            <div class="calendar-info__priority-title">
              {{ task.priority }}
            </div>
          </div>
        </div>
        <div class="calendar-info__users">
          <div
            v-for="user in task.users"
            :key="user.id"
            class="calendar-info__user-wrap"
          >
            <nuxt-link to="agent-info" class="calendar-info__user">
              <img :src="require(`~/assets/img/calendar/${user.img}`)" alt="" />
            </nuxt-link>
          </div>
        </div>
        <div class="calendar-info__icon">
          <DotsIcon />
        </div>
      </div>
    </div>
    <div class="calendar-info__section">
      <div class="calendar-info__section-title-wrap flex">
        <div class="calendar-info__section-title">
          {{ $t("completed") }}
        </div>
        <div class="calendar-info__section-not">
          <div class="calendar-info__section-not-inner">
            {{ $t("inactive") }}
          </div>
        </div>
      </div>
      <div
        v-for="task in tasks.completed"
        :key="task.id"
        class="calendar-info__item inactive"
      >
        <div class="calendar-info__title">
          {{ task.title }}
        </div>
        <div class="calendar-info__status" :class="task.status">
          <div class="calendar-info__status-inner">
            <span class="calendar-info__status-title">
              {{ task.status }}
            </span>
          </div>
        </div>
        <div class="calendar-info__priority" :class="task.priority">
          <div class="calendar-info__priority-inner">
            <div class="calendar-info__priority-title">
              {{ task.priority }}
            </div>
          </div>
        </div>
        <div class="calendar-info__users">
          <div
            v-for="user in task.users"
            :key="user.id"
            class="calendar-info__user-wrap"
          >
            <nuxt-link to="agent-info" class="calendar-info__user">
              <img :src="require(`~/assets/img/calendar/${user.img}`)" alt="" />
            </nuxt-link>
          </div>
        </div>
        <div class="calendar-info__icon">
          <DotsIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DotsIcon from "~/components/icons/common/dots";
export default {
  name: "calendar-info",

  components: {
    DotsIcon
  },

  data() {
    return {
      tasks: {
        hold: [
          {
            id: 0,
            title: "Visit with belgium customers.",
            status: "pending",
            priority: "minor",
            users: [
              { id: 0, img: "pic1.png" },
              { id: 1, img: "pic2.png" },
              { id: 2, img: "pic3.jpg" },
              { id: 3, img: "pic4.png" }
            ]
          },
          {
            id: 1,
            title: "Share documents with the  team.",
            status: "",
            priority: "normal",
            users: [
              { id: 0, img: "pic1.png" },
              { id: 1, img: "pic2.png" },
              { id: 2, img: "pic3.jpg" },
              { id: 3, img: "pic4.png" }
            ]
          },
          {
            id: 2,
            title: "Appointment with the buyer.",
            status: "pending",
            priority: "critical",
            users: [
              { id: 0, img: "pic1.png" },
              { id: 1, img: "pic2.png" },
              { id: 2, img: "pic3.jpg" }
            ]
          },
          {
            id: 3,
            title: "Negotiation with the seller",
            status: "pending",
            priority: "minor",
            users: [{ id: 0, img: "pic1.png" }]
          }
        ],
        completed: [
          {
            id: 0,
            title: "Appointment with the buyer.",
            status: "pending",
            priority: "critical",
            users: [
              { id: 0, img: "pic1.png" },
              { id: 1, img: "pic2.png" },
              { id: 2, img: "pic3.jpg" }
            ]
          },
          {
            id: 1,
            title: "Negotiation with the seller",
            status: "pending",
            priority: "minor",
            users: [{ id: 0, img: "pic1.png" }]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.calendar-info {
  &__section {
    margin-bottom: 45px;
    &-title {
      margin-bottom: 12px;
      font-size: 18px;
      &.font-bold {
        font-weight: bold;
      }
      &-wrap.flex {
        display: flex;
        align-items: center;
      }
    }
    &-not {
      margin-bottom: 12px;
      margin-left: 10px;
      padding: 0px 8px;
      background: rgba(235, 87, 87, 0.2);
      border-radius: 8.5px;
      &-inner {
        font-size: 10px;
        color: rgba(235, 87, 87, 1);
      }
    }
  }
  &__item {
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 0.5px solid rgba(224, 224, 224, 1);
    @include maxMedia($breakpoint-sm) {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
    &:last-child {
      border-bottom: 0;
    }
    &.inactive {
      opacity: 0.3;
    }
  }
  &__title {
    width: 50%;
    font-size: 14px;
    position: relative;
    padding-left: 20px;
    &:before,
    &:after {
      content: "";
      width: 9px;
      height: 10px;
      background: linear-gradient(
        133.9deg,
        rgba(243, 71, 122, 0.2) 0.24%,
        rgba(136, 76, 178, 0.2) 95.04%
      );
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-radius: 50%;
    }
    &:after {
      width: 5px;
      height: 5px;
      background: linear-gradient(
        133.9deg,
        rgba(243, 71, 122, 0.7) 0.24%,
        rgba(136, 76, 178, 0.7) 95.04%
      );
      left: 2px;
    }
  }
  &__status {
    width: 17%;
    &-inner {
      padding: 1px 17px;
      overflow: hidden;
      border-radius: 10px;
      text-align: center;
    }
    &-title {
      font-size: 11px;
      text-transform: capitalize;
    }
    &.pending {
      .calendar-info__status-inner {
        display: inline-block;
        background: rgba(242, 153, 74, 0.2);
      }
      .calendar-info__status-title {
        color: $baseOrange;
      }
    }
  }
  &__priority {
    width: 17%;
    &-inner {
      display: inline-block;
    }
    &-title {
      padding-left: 13px;
      position: relative;
      text-transform: capitalize;
      font-size: 12px;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 8px;
        height: 8px;
        background: $baseWhite;
        border: 2px solid transparent;
      }
    }
    &.minor {
      .calendar-info__priority-title:before {
        border-color: #219653;
      }
    }
    &.normal {
      .calendar-info__priority-title:before {
        border-color: $baseOrange;
      }
    }
    &.critical {
      .calendar-info__priority-title:before {
        border-color: $baseRed;
      }
    }
  }
  &__users {
    display: flex;
    align-items: center;
    width: 12%;
  }
  &__user {
    transition: all 0.3s ease;
    display: inline-block;
    margin-right: -4px;
    width: 23px;
    height: 23px;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:hover {
      transform: translateY(-2px);
    }
  }
  &__icon {
    cursor: pointer;
    margin-left: auto;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-2px);
    }
  }
}
</style>
