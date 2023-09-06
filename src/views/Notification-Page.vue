<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
    <div class="notification-page">
      
    <div>
    <NavBar/>
    </div>
    <div class="box2"></div>

    <h2>Abandoned People's Posts</h2>
    <div v-if="loadingPosts">Loading posts...</div>
    <div v-else-if="abandonedPeoplePosts.length === 0">No posts found.</div>
    <ul v-else>
      <li v-for="post in abandonedPeoplePosts" :key="post.id" class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <p>Location: {{ post.location }}</p>
        <p>Contact: {{ post.contact }}</p>
      </li>
    </ul>

    <h2>Children Home Requirements Posts</h2>
    <div v-if="loadingChildrenHomePosts">Loading posts...</div>
    <div v-else-if="childrenHomePosts.length === 0">No posts found.</div>
    <ul v-else>
      <li v-for="post in childrenHomePosts" :key="post.id" class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <p>Location: {{ post.location }}</p>
        <p>Contact: {{ post.contact }}</p>
      </li>
    </ul>

    <h2>Elder Homes Requirements Posts</h2>
    <div v-if="loadingElderHomePosts">Loading posts...</div>
    <div v-else-if="elderHomePosts.length === 0">No posts found.</div>
    <ul v-else>
      <li v-for="post in elderHomePosts" :key="post.id" class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <p>Location: {{ post.location }}</p>
        <p>Contact: {{ post.contact }}</p>
      </li>
    </ul>
    <div class="box2"></div>
    <div>
      <page-footer/>
    </div>
    <div class="box1"></div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import PageFooter from '@/components/PageFooter.vue';
export default {

  data() {
    return {
      abandonedPeoplePosts: [
        // Mock data for abandoned people's posts
        {
          id: 1,
          title: 'Post 1',
          description: 'This is the description of Post 1.',
          location: 'Location 1',
          contact: 'Contact 1',
        },
        {
          id: 2,
          title: 'Post 2',
          description: 'This is the description of Post 2.',
          location: 'Location 2',
          contact: 'Contact 2',
        },
      ],
      childrenHomePosts: [
        // Mock data for children home requirements posts
        {
          id: 1,
          title: 'Post 1',
          description: 'This is the description of Post 1.',
          location: 'Location 1',
          contact: 'Contact 1',
        },
      ],
      elderHomePosts: [
        // Mock data for elder homes requirements posts
        {
          id: 1,
          title: 'Post 1',
          description: 'This is the description of Post 1.',
          location: 'Location 1',
          contact: 'Contact 1',
        },
        {
          id: 2,
          title: 'Post 2',
          description: 'This is the description of Post 2.',
          location: 'Location 2',
          contact: 'Contact 2',
        },
      ],
      loadingPosts: false,
      loadingChildrenHomePosts: false,
      loadingElderHomePosts: false,
    };
  },
  components:{
    NavBar,
  PageFooter
  }
};
</script>

<style scoped>
.notification-page {
  background-color:  #284b36;
 
}

.post-item {
  border: 10px solid rgba(45, 89, 63, 0.44);
  border-radius: 35px;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 100px;
  margin-left: 25px;
  background-color: #ffffff;

}
.box2 {
  margin-bottom: 50px; /* Adds margin space at the bottom of the box */
  padding: 20px; /* Adds padding space inside the box */
  
}
.box1 {
  /* Adds margin space at the bottom of the box */
  padding: 5px;
}
.post-item h3 {
  color: #333;
  font-weight: bold;
  font-size: medium;
  justify-content: center;
}

.post-item p {
  margin: 5px 0;
  font-size: small;
  justify-content: center;
}

.loading-posts,
.loadingChildrenHomePosts,
.loadingElderHomePosts {
  color: #555;
}

.no-posts-message {
  color: #888;
  font-style: italic;
}

h2 {
  margin-top: 20px;
  font-size: 40px;margin-left: 30px;  color: white;
  font-weight: lighter;
  text-align: justify;
}
</style>
