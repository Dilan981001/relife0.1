<template>
  <div class="notification-page">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
  
    <div class="box1"></div>
    <div class="top-panel">
      <q-btn-group flat>
        <div class="left-panel">
          <q-img src="relife3.ico" width="95px" height="54px" class="q-mr-md" />
        </div>

        <div class="right-panel">
          <div class="form-actions">
            <q-btn to="/home" label="HOME" class="q-mr-md" />
          </div>
          <div class="form-actions">
            <q-btn to="/home" label="Elder's home" class="q-mr-md" />
          </div>
          <div class="form-actions">
            <q-btn to="/home" label="children's home" class="q-mr-md" />
          </div>

          <div class="form-actions">
            <q-btn to="/notificationpage" label="NOTIFICATIONS" class="q-mr-md" />
          </div>
          <div class="form-actions">
            <q-btn label="DONATE" class="q-mr-md" />
          </div>
          <div class="form-actions">
            <q-btn to="/marketplace" label="MarketPlace" class="q-mr-md" />
          </div>
          <div class="form-actions">
            <q-btn to="/signin" label="Sign in / Sign up " class="q-mr-md" />
          </div>
        </div>
      </q-btn-group>
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
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.notification-page {
  background-color: #3b676e;
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
.right-panel {
  margin-left: 270px;
  display: flex;
}
.top-panel {
  color: #cccccc;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  font-weight: bold;
  height: 20px;
}
.box2 {
  margin-bottom: 30px; /* Adds margin space at the bottom of the box */
  padding: 20px; /* Adds padding space inside the box */
  margin-top: 30px;
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
