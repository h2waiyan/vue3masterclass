import { createStore } from 'vuex'
import sourceData from '@/data.json'

export default createStore({
    state: {
        ...sourceData,
        authId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
    },
    getters: {
        authUser: state => {
            const user = state.users.find((user) => user.id === state.authId)
            if (!user) return null;
            return {
                ...user,
                // authUser.threads
                get threads() {
                    return state.threads.filter(
                        (thread) => thread.userId === user.id
                    );
                },
                // authUser.threadsCount
                get threadsCount() {
                    return this.threads.length;
                },
                // authUser.post
                get posts() {
                    return state.posts.filter(
                        (post) => post.userId === user.id
                    );
                },
                // authUser.posts
                get postsCount() {
                    return this.posts.length;
                },
            }
        }
    },
    actions: {
        createPost(context, post) {
            post.id = 'ggg' + Math.random();
            context.commit('setPost', { post }),
                context.commit('appendPostId', { postId: post.id, threadId: post.threadId })
        }
    },
    mutations: {
        setPost(state, { post }) {
            state.posts.push(post) // setpost
        },
        appendPostId(state, { postId, threadId }) {
            const thread = state.threads.find((thread) => thread.id === threadId)
            thread.posts.push(postId) // append post id to threads
        }
    }
})