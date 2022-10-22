# Auth concept

- **Authentication**

  authentication is a process of identification of a user.

- **Authorization**

  authorization is like permission, access to something. access scope of a user.

## methods of authentication

- Token-based
- session-based
- oAuth

## Session based authentication

session based authentication is stateful. when a user is logged in to our site. server will create a session for that logged in user. then, the session will be stored in the database. Then, the generated session ID /string / info is been delivered to client via cookies from the server. The logout mechanism works by removing the session from Databases.

   <details>
  <summary> <b>session pic</b>  </summary>
   <img src="/images/Capture.png"/>
   </details>

## Token based authentication

Token based authentication is stateless. Which means server will not remember the token. When a user login, the server generates a token, and send that token to client. Now, client has to remember the token via session/ local storage/ cookie. For accessing resource client has to send the token to the server, otherwise client will not get the resource. Server than checks the token, is it valid or not (is the token generated by the server or not, is it a expired token or not etc. ). if it’s valid then the client can access the resource

   <details>
   <summary>
    <b>Token pic</b>
    </summary>
  <img src="/images/Capture1.png"/>
   </details>

## http vs https

**HTTPS is HTTP with encryption and verification**
. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses, and to digitally sign those requests and responses. As a result, HTTPS is far more secure than HTTP.

## OAuth vs Auth0

- OAuth is an authentication method/ protocol/ standard. It allows a user to grant limited access to their resources, without having to expose their credentials.
- Auth0 is a service. Auth0 provides authentication services based mainly on the OAuth protocol.

## Why token based auth over session based?

Our application might have a lot of server, so to distribute our server load we might use a load balancer, now for session based auth: server has to remember that particular session for user. When we have many server this might become less convenient for users to keep logging back and forth. So, to counter this issue, we use token based auth. Which is stateless meaning server don’t have to remember anything. It’s now client’s (browser) responsibility to remember token.

<details>
   <summary>
   <b>multi server scenario</b>
   </summary>
  <img src="/images/capture3.jpeg"/>
   </details>

## JWT Token

- jwt token has three part. The first part is header. which says which algorithm is used.
- The second part is payload. which is basically user’s/clients data. **(don’t put secret data there, remember jwt token is encoded, it’s not encrypted. So, avoid putting any sensitive data in there at all cost, you can put basic info/ user ID in it).**
- The third part is about signature verification. which is the main thing that validates the token in server with a secret code.

<details>
   <summary>
   <b>JWT structure</b>
   </summary>
  <img src="/images/jwt-structure.png"/>
   </details>
