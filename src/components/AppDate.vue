<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default {
    props: {
        timestamp: {
            required: true,
            type: Number
        }
    },
    methods: {
        diffForHumans() {
            return dayjs(this.timestamp * 1000).fromNow()
        },
        humanFriendlyDate() {
            return dayjs(this.timestamp * 1000).format('MMMM D, YYYY h:mm A')
        }
  },
};
</script>

<style scoped>
</style>