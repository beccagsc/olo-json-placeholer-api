import { ApiTestGroup } from './ApiTestGroup.js'

const baseUrl = 'https://jsonplaceholder.typicode.com';
const postsUrl = baseUrl + '/posts';
const postId = 1;
const postUserId = 555;
const postUpdatedUserId = 5;
const postTitle = "Becca's blog post";
const postUpdatedTitle = "Becca's newer and better blog post";
const postBody = "Lots of Latin text goes here."
const postUpdatedBody = "Updated body for this blog post.\nThis is the new text."
const commenterName = "Bob Smith";
const commenterEmail = "bob@bobs.biz"
const comment = "This is the most profound thing that I have ever read."


// POST https://jsonplaceholder.typicode.com/posts
const bodyOfPOST = {
  userId: postUserId,
  title: postTitle,
  description: postBody
};
const testGroupPOSTPost = new ApiTestGroup('POST', postsUrl, bodyOfPOST);
testGroupPOSTPost.fetchResponse().then(() => {
  testGroupPOSTPost.testCase('status', 201);
  testGroupPOSTPost.testCase('body.userId', postUserId);
  testGroupPOSTPost.testCase('body.title', postTitle);
  testGroupPOSTPost.testCase('body.description', postBody);
});

// PUT https://jsonplaceholder.typicode.com/posts/{postId}
const bodyOfPUT = {
  id: postId,
  userId: postUpdatedUserId,
  title: postUpdatedTitle,
  description: postUpdatedBody
};
const testGroupPUTPost = new ApiTestGroup('PUT', `${postsUrl}/${postId}`, bodyOfPUT);
testGroupPUTPost.fetchResponse().then(() => {
  testGroupPUTPost.testCase('body.id', postId);
  testGroupPUTPost.testCase('body.userId', postUpdatedUserId);
  testGroupPUTPost.testCase('body.title', postUpdatedTitle);
  testGroupPUTPost.testCase('body.description', postUpdatedBody);
});

// POST https://jsonplaceholder.typicode.com/posts/{postId}/comments
const bodyOfCommentPOST = {
  name: commenterName,
  email: commenterEmail,
  body: comment
};
const testGroupPOSTComments = new ApiTestGroup('POST', `${postsUrl}/${postId}/comments`, bodyOfCommentPOST);
testGroupPOSTComments.fetchResponse().then(() => {
  //API bug/quirk that the post ID is returned as a string for this endpoint
  testGroupPOSTComments.testCase('body.postId', String(postId));
  testGroupPOSTComments.testCase('body.name', commenterName);
  testGroupPOSTComments.testCase('body.email', commenterEmail);
  testGroupPOSTComments.testCase('body.body', comment);
});
