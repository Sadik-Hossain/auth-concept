# Auth concept

- **Authentication**

  authentication is a process of identification of a user.

- **Authorization**

  authorization is like permission, access to something. access scope of a user.

## methods of authentication

- Token-based
- session-based
- oAuth

- ## Session based authentication

  session based authentication is stateful. when a user is logged in to our site. server will create a session for that logged in user. then, the session will be stored in the database. Then, the generated session ID /string / info is been delivered to client via cookies from the server. The logout mechanism works by removing the session from Databases.
   <details>
  <summary>session pic</summary>
   <img src="/images/Capture.png"/>
   </details>

- ## Token based authentication

  Token based authentication is stateless. Which means server will not remember the token. When a user login, the server generates a token, and send that token to client. Now, client has to remember the token via session/ local storage/ cookie. For accessing resource client has to send the token to the server, otherwise client will not get the resource. Server than checks the token, is it valid or not (is the token generated by the server or not, is it a expired token or not etc. ). if it’s valid then the client can access the resource
   <details>
   <summary>Token pic</summary>
  <img src="/images/Capture1.png"/>
   </details>

  ## http vs https

  **HTTPS is HTTP with encryption and verification**
  . The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses, and to digitally sign those requests and responses. As a result, HTTPS is far more secure than HTTP.

  ## OAuth vs Auth0

  OAuth is an authentication method/ protocol/ standard. It allows a user to grant limited access to their resources, without having to expose their credentials.
  Auth0 is a service. Auth0 provides authentication services based mainly on the OAuth protocol.

## Why token based auth over session based?

Our application might have a lot of server, so to distribute our server load we might use a load balancer, now for session based auth: server has to remember that particular session for user. When we have many server this might become less convenient for users to keep logging back and forth. So, to counter this issue, we use token based auth. Which is stateless meaning server don’t have to remember anything. It’s now client’s (browser) responsibility to remember token.

<details>
   <summary>multi server scenario</summary>
  <img src="/images/capture3.jpeg"/>
   </details>
