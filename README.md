To run the API tests, type `node json-placeholder-api.spec.js`

### Additional Functionality Ideas
- These test cases only test response fields for equality. There are a lot of other operators that would be nice to have, e.g. the whole Chai assertion library
- Being able to run the tests serially or in parallel
- More output for test failures
- For an API that can actually create, update and delete data, make GET calls to verify that the data actually changed
- Header testing

### Possible API issues
- Docs say to send in post ID in PUT even though it's in the query url
- For the PUT endpoint, sending in a postId that doesn't exist causes a 500 from the server
- The DELETE endpoint returns a 200, no matter what you send for postId
- /posts/postId/comments returns the post id as a string, not a number like the other enpoints do
- People's name & email are exposed in the response from the comments endpoint