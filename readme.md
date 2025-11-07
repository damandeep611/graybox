# 🎯 Graybox - Full Stack Learning Repository

A comprehensive collection of projects, experiments, and learning resources covering full-stack development, system design, algorithms, and infrastructure.

---

## 📚 Quick Index

### Languages & Fundamentals
- [JavaScript Basics](#javascript-basics) - `javascript` `fundamentals`
- [TypeScript Deep Dive](#typescript-deep-dive) - `typescript` `types`
- [Golang Essentials](#golang-essentials) - `golang` `concurrency`
- [Rust Fundamentals](#rust-fundamentals) - `rust` `memory-safety`

### Frontend
- [React State Management](#react-state-management) - `react` `hooks` `state`
- [React with Bun](#react-with-bun) - `react` `bun` `bundler`
- [Next.js Routing Basics](#nextjs-routing-basics) - `nextjs` `routing` `ssr`
- [Next.js Dynamic Routing](#nextjs-dynamic-routing) - `nextjs` `routing` `dynamic`
- [Next.js Caching Strategies](#nextjs-caching-strategies) - `nextjs` `caching` `isr`
- [Next.js Coolify Deployment](#nextjs-coolify-deployment) - `nextjs` `deployment` `coolify`
- [TanStack Query Basics](#tanstack-query-basics) - `react` `tanstack` `data-fetching`
- [TanStack Router](#tanstack-router) - `react` `tanstack` `routing`

### Backend
- [HTTP Fundamentals](#http-fundamentals) - `http` `protocols` `networking`
- [Routing Patterns](#routing-patterns) - `routing` `api-design`
- [TypeScript Backend](#typescript-backend) - `typescript` `nodejs` `backend`
- [Bun Backend](#bun-backend) - `bun` `typescript` `performance`
- [Kafka](#kafka) - `kafka` `messaging` `event-streaming`
- [Redis](#redis) - `redis` `caching` `data-store`
- [PostgreSQL](#postgresql) - `postgresql` `sql` `database`
- [MongoDB](#mongodb) - `mongodb` `nosql` `database`

### Fullstack
- [Chat App](#chat-app) - `react` `websockets` `realtime` `fullstack`
- [tRPC Integration](#trpc-integration) - `trpc` `typescript` `api`
- [WebSockets App](#websockets-app) - `websockets` `realtime` `nodejs`
- [Auth Implementation](#auth-implementation) - `authentication` `jwt` `sessions`

### Infrastructure
- [Docker Basic + Deployment-cloud + docker Pipeline](#docker-core) - `docker` `containers` `deployment` `cloud` `digitalocean` 
- [GitHub Actions](#github-actions) - `ci-cd` `github` `automation`
- [Prometheus + Grafana](#prometheus) - `monitoring` `metrics` `observability + visualization`
- [ELK](#observability) - `Elasticsearch` `Logstash` `Kibana`
- [Turborepo](#turborepo) - `monorepo` `build-tools`

### System Design
- [URL Shortener](#url-shortener) - `system-design` `distributed-systems`
- [Rate Limiter](#rate-limiter) - `system-design` `algorithms`

### DSA
- [Arrays](#arrays) - `dsa` `data-structures` `arrays`
- [Linked Lists](#linked-lists) - `dsa` `data-structures` `linked-lists`
- [Trees](#trees) - `dsa` `data-structures` `trees`
- [Sliding Window](#sliding-window) - `dsa` `patterns` `algorithms`
- [Two Pointers](#two-pointers) - `dsa` `patterns` `algorithms`

### Computer Science Fundamentals
- [HTTP Server Implementation](#http-server-implementation) - `networking` `http` `sockets`
- [TCP Chat](#tcp-chat) - `networking` `tcp` `protocols`

### AI/ML
- [AI SDK](#ai-sdk) - `ai` `llm` `sdk`
- [LLM Workflows](#llm-workflows) - `llm` `workflows` `automation`
- [Agents Basics](#agents-basics) - `ai` `agents` `autonomous`

### Concepts
- [WebSockets Fundamentals](#websockets-fundamentals) - `websockets` `realtime` `protocols`

### Git Learning
- [Branching Strategies](#branching-strategies) - `git` `branching` `workflows`
- [Rebase Practice](#rebase-practice) - `git` `rebase` `history`

---

## 🔗 Learning Paths

**Frontend Development Track:**  
`languages/javascript` → `languages/typescript` → `frontend/react` → `frontend/nextjs`

**Backend Development Track:**  
`languages/typescript` → `backend/http-fundamentals` → `backend/routing-patterns` → `backend/typescript-backend`

**Fullstack Development Track:**  
`frontend/react` → `backend/typescript-backend` → `fullstack/auth-implementation` → `fullstack/chat-app`

**Real-time Applications Track:**  
`concepts/websockets` → `backend/websockets` → `fullstack/websockets-app`

**System Design Track:**  
`backend/http-fundamentals` → `backend/redis` → `backend/kafka` → `system-design/url-shortener`

**Modern Deployment Track:**  
`infrastructure/docker` → `infrastructure/ci-cd` → `infrastructure/cloud` → `infrastructure/observability`

**Database Track:**  
`cs-fundamentals/databases` → `backend/postgresql` → `backend/mongodb` → `backend/redis`

**DSA Fundamentals:**  
`dsa/data-structures/arrays` → `dsa/data-structures/linked-lists` → `dsa/patterns/two-pointers` → `dsa/patterns/sliding-window`

---

## 📖 Detailed Sections

## Languages & Fundamentals

**[→ View Languages README](./languages/README.md)**

### JavaScript Basics
**Path:** `languages/javascript/`

Covers JavaScript fundamentals including ES6+ features, async/await, promises, closures, prototypes, and modern JavaScript patterns. This forms the foundation for all frontend and backend work in this repository.

**📖 Articles**
- [JavaScript.info - Modern JavaScript Tutorial](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

**🎥 YouTube**
- [JavaScript Course by freeCodeCamp](https://www.youtube.com/watch?v=PkZNo7MFNFg)
- [Advanced JavaScript Concepts](https://www.youtube.com/watch?v=R9I85RhI7Cg)

**📚 References**
- [ECMAScript Specifications](https://tc39.es/ecma262/)
- [You Don't Know JS Book Series](https://github.com/getify/You-Dont-Know-JS)

---

### TypeScript Deep Dive
**Path:** `languages/typescript/`

Deep exploration of TypeScript including advanced types, generics, decorators, type guards, utility types, and configuring TypeScript for different environments. Essential for modern full-stack development.

**📖 Articles**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive by Basarat](https://basarat.gitbook.io/typescript/)

**🎥 YouTube**
- [TypeScript Course by Traversy Media](https://www.youtube.com/watch?v=BCg4U1FzODs)
- [Advanced TypeScript Patterns](https://www.youtube.com/watch?v=BnOrmOWlCz0)

**📚 References**
- [TypeScript Official Documentation](https://www.typescriptlang.org/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)

---

### Golang Essentials
**Path:** `languages/golang/`

Learning Go fundamentals including goroutines, channels, interfaces, error handling, and Go's approach to concurrent programming. Exploring Go's standard library and idiomatic patterns.

**📖 Articles**
- [A Tour of Go](https://go.dev/tour/)
- [Effective Go](https://go.dev/doc/effective_go)

**🎥 YouTube**
- [Go Programming Course by freeCodeCamp](https://www.youtube.com/watch?v=YS4e4q9oBaU)
- [Concurrency in Go](https://www.youtube.com/watch?v=LvgVSSpwND8)

**📚 References**
- [Go Official Documentation](https://go.dev/doc/)
- [Go by Example](https://gobyexample.com/)

---

### Rust Fundamentals
**Path:** `languages/rust/`

Understanding Rust's ownership model, borrowing, lifetimes, traits, and memory safety guarantees. Exploring Rust's approach to systems programming without garbage collection.

**📖 Articles**
- [The Rust Book](https://doc.rust-lang.org/book/)
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/)

**🎥 YouTube**
- [Rust Programming Course](https://www.youtube.com/watch?v=zF34dRivLOw)
- [Rust Ownership Explained](https://www.youtube.com/watch?v=VFIOSWy93H0)

**📚 References**
- [Rust Official Documentation](https://www.rust-lang.org/learn)
- [Rustlings - Small Exercises](https://github.com/rust-lang/rustlings)

---

## Frontend

**[→ View Frontend README](./frontend/README.md)**

### React State Management
**Path:** `frontend/react/state-management/`

Exploring different state management approaches in React including useState, useReducer, Context API, and state management libraries. Understanding when to use local vs global state and state lifting patterns.

**📖 Articles**
- [React Documentation - Managing State](https://react.dev/learn/managing-state)
- [State Management in React](https://www.robinwieruch.de/react-state/)

**🎥 YouTube**
- [React State Management Tutorial](https://www.youtube.com/watch?v=35lXWvCuM8o)
- [Context API Deep Dive](https://www.youtube.com/watch?v=5LrDIWkK_Bc)

**📚 References**
- [React Docs - State](https://react.dev/reference/react/useState)
- [Redux Documentation](https://redux.js.org/)

---

### React with Bun
**Path:** `frontend/react/react-with-bun/`

Setting up and building React applications using Bun as the JavaScript runtime and bundler. Exploring the performance benefits and developer experience improvements with Bun.

**📖 Articles**
- [Bun Documentation](https://bun.sh/docs)
- [Why Bun is Fast](https://bun.sh/blog/bun-v1.0)

**🎥 YouTube**
- [Bun Complete Tutorial](https://www.youtube.com/watch?v=dWqNgzZwVJQ)
- [React with Bun Setup](https://www.youtube.com/watch?v=3j37M1IMV_s)

**📚 References**
- [Bun Official Docs](https://bun.sh/)
- [Bun GitHub Repository](https://github.com/oven-sh/bun)

---

### Next.js Routing Basics
**Path:** `frontend/nextjs/routing-basics/`

Understanding Next.js file-based routing system, pages directory structure, navigation between routes, and the Link component. Foundation for building Next.js applications.

**📖 Articles**
- [Next.js Routing Documentation](https://nextjs.org/docs/routing/introduction)
- [Understanding Next.js Routing](https://www.freecodecamp.org/news/nextjs-routing-tutorial/)

**🎥 YouTube**
- [Next.js Routing Tutorial](https://www.youtube.com/watch?v=ZjAqacIC_3c)
- [Next.js App Router](https://www.youtube.com/watch?v=gSSsZReIFRk)

**📚 References**
- [Next.js Official Documentation](https://nextjs.org/docs)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

---

### Next.js Dynamic Routing
**Path:** `frontend/nextjs/dynamic-routing/`

Implementing dynamic routes using brackets notation, catch-all routes, optional catch-all routes, and accessing route parameters. Building flexible routing patterns for content-driven applications.

**📖 Articles**
- [Next.js Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)
- [Advanced Routing Patterns](https://vercel.com/guides/nextjs-dynamic-routing)

**🎥 YouTube**
- [Dynamic Routes in Next.js](https://www.youtube.com/watch?v=fnpmR6Q5lEc)
- [Dynamic Routing Deep Dive](https://www.youtube.com/watch?v=3RYsHDzZKKc)

**📚 References**
- [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)

---

### Next.js Caching Strategies
**Path:** `frontend/nextjs/caching-strategies/`

Learning about Next.js caching mechanisms including ISR (Incremental Static Regeneration), SSG (Static Site Generation), revalidation strategies, and cache control headers for optimal performance.

**📖 Articles**
- [Next.js Caching Documentation](https://nextjs.org/docs/app/building-your-application/caching)
- [ISR Explained](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration)

**🎥 YouTube**
- [Next.js Caching Strategies](https://www.youtube.com/watch?v=VBlSe8tvg4U)
- [ISR in Next.js](https://www.youtube.com/watch?v=nrfuN_Hyd3Y)

**📚 References**
- [Next.js Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)

---

### Next.js Coolify Deployment
**Path:** `frontend/nextjs/deployment-coolify/`

Deploying Next.js applications to Coolify, a self-hosted PaaS alternative. Understanding the deployment pipeline, environment variables, and managing production builds.

**📖 Articles**
- [Coolify Documentation](https://coolify.io/docs)
- [Self-hosting Next.js Apps](https://nextjs.org/docs/deployment)

**🎥 YouTube**
- [Coolify Tutorial](https://www.youtube.com/watch?v=taJlPG82Ucw)
- [Deploy Next.js to Coolify](https://www.youtube.com/watch?v=9S9YjxT6YeE)

**📚 References**
- [Coolify Official Site](https://coolify.io/)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

---

### TanStack Query Basics
**Path:** `frontend/tanstack/query-basics/`

Understanding TanStack Query (React Query) for server state management, caching, background refetching, and optimistic updates. Managing async data with minimal boilerplate.

**📖 Articles**
- [TanStack Query Docs](https://tanstack.com/query/latest/docs/react/overview)
- [React Query Tutorial](https://tkdodo.eu/blog/practical-react-query)

**🎥 YouTube**
- [React Query Tutorial](https://www.youtube.com/watch?v=novnyCaa7To)
- [TanStack Query Deep Dive](https://www.youtube.com/watch?v=8K1N3fE-cDs)

**📚 References**
- [TanStack Query Documentation](https://tanstack.com/query)
- [React Query Examples](https://tanstack.com/query/latest/docs/react/examples/simple)

---

### TanStack Router
**Path:** `frontend/tanstack/router/`

Exploring TanStack Router for type-safe routing in React applications. Understanding route definitions, nested routes, route loaders, and search params validation.

**📖 Articles**
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Type-safe Routing in React](https://tanstack.com/router/latest/docs/framework/react/guide/routing)

**🎥 YouTube**
- [TanStack Router Introduction](https://www.youtube.com/watch?v=qOwnQJOClrw)
- [Advanced Routing Patterns](https://www.youtube.com/watch?v=9B5I3iyYSPc)

**📚 References**
- [TanStack Router Documentation](https://tanstack.com/router)

---

## Backend

**[→ View Backend README](./backend/README.md)**

### HTTP Fundamentals
**Path:** `backend/http-fundamentals/`

Deep dive into HTTP protocol, request/response cycle, methods, status codes, headers, cookies, and sessions. Understanding how the web works at the protocol level.

**📖 Articles**
- [MDN HTTP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc2616)

**🎥 YouTube**
- [HTTP Crash Course](https://www.youtube.com/watch?v=iYM2zFP3Zn0)
- [Understanding HTTP Requests](https://www.youtube.com/watch?v=pHFWGN-upGM)

**📚 References**
- [HTTP/2 Documentation](https://http2.github.io/)
- [RESTful API Design](https://restfulapi.net/)

---

### Routing Patterns
**Path:** `backend/routing-patterns/`

Exploring different routing patterns in backend applications including RESTful routing, nested routes, route parameters, middleware integration, and route organization strategies.

**📖 Articles**
- [Express Routing Guide](https://expressjs.com/en/guide/routing.html)
- [REST API Routing Best Practices](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/)

**🎥 YouTube**
- [Express Routing Tutorial](https://www.youtube.com/watch?v=pKd0Rpw7O48)
- [REST API Design](https://www.youtube.com/watch?v=0oXYLzuucwE)

**📚 References**
- [API Design Patterns](https://swagger.io/resources/articles/best-practices-in-api-design/)

---

### TypeScript Backend
**Path:** `backend/typescript-backend/`

Building type-safe backend applications with TypeScript and Node.js. Understanding TypeScript configuration for backend, decorators, type definitions for Express, and structuring backend codebases.

**📖 Articles**
- [Node.js with TypeScript](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)
- [TypeScript Backend Best Practices](https://www.sitepoint.com/typescript-tutorial-for-beginners/)

**🎥 YouTube**
- [TypeScript Express Tutorial](https://www.youtube.com/watch?v=qy8PxD3alWw)
- [Backend TypeScript Course](https://www.youtube.com/watch?v=H91aqUHn8sE)

**📚 References**
- [Express TypeScript Definitions](https://www.npmjs.com/package/@types/express)
- [tsconfig for Node](https://github.com/tsconfig/bases)

---

### Bun Backend
**Path:** `backend/bun-backend/`

Building backend applications using Bun runtime. Exploring Bun's built-in HTTP server, file system APIs, SQLite integration, and performance optimizations compared to Node.js.

**📖 Articles**
- [Bun HTTP Server](https://bun.sh/docs/api/http)
- [Building APIs with Bun](https://bun.sh/guides/http/server)

**🎥 YouTube**
- [Bun Backend Tutorial](https://www.youtube.com/watch?v=dWqNgzZwVJQ)
- [Bun vs Node Performance](https://www.youtube.com/watch?v=FMhScnY0dME)

**📚 References**
- [Bun API Documentation](https://bun.sh/docs)

---

### Kafka
**Path:** `backend/kafka/`

Learning Apache Kafka for event streaming and message queuing. Understanding topics, partitions, producers, consumers, consumer groups, and building event-driven architectures.

**📖 Articles**
- [Kafka Documentation](https://kafka.apache.org/documentation/)
- [Introduction to Kafka](https://www.confluent.io/what-is-apache-kafka/)

**🎥 YouTube**
- [Kafka Tutorial for Beginners](https://www.youtube.com/watch?v=R873BlNVUB4)
- [Event-Driven Architecture with Kafka](https://www.youtube.com/watch?v=Ch5VhJzaoaI)

**📚 References**
- [Apache Kafka](https://kafka.apache.org/)
- [Confluent Documentation](https://docs.confluent.io/)

---

### Redis
**Path:** `backend/redis/`

Exploring Redis as an in-memory data store for caching, session management, pub/sub messaging, and real-time features. Understanding Redis data structures and use cases.

**📖 Articles**
- [Redis Documentation](https://redis.io/docs/)
- [Redis Use Cases](https://redis.com/solutions/)

**🎥 YouTube**
- [Redis Crash Course](https://www.youtube.com/watch?v=jgpVdJB2sKQ)
- [Redis for Node.js Developers](https://www.youtube.com/watch?v=oaJq1mQ3dFI)

**📚 References**
- [Redis Official Site](https://redis.io/)
- [Redis Commands Reference](https://redis.io/commands/)

---

### PostgreSQL
**Path:** `backend/postgresql/`

Working with PostgreSQL relational database including SQL queries, indexing, transactions, JSONB, full-text search, and database design patterns. Using PostgreSQL with Node.js and TypeScript.

**📖 Articles**
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

**🎥 YouTube**
- [PostgreSQL Course](https://www.youtube.com/watch?v=qw--VYLpxG4)
- [Advanced PostgreSQL](https://www.youtube.com/watch?v=7S_tz1z_5bA)

**📚 References**
- [PostgreSQL Official Docs](https://www.postgresql.org/)
- [node-postgres Library](https://node-postgres.com/)

---

### MongoDB
**Path:** `backend/mongodb/`

Learning MongoDB NoSQL database including document modeling, CRUD operations, aggregation pipelines, indexing strategies, and using MongoDB with Node.js through Mongoose or native driver.

**📖 Articles**
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [MongoDB Schema Design](https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/)

**🎥 YouTube**
- [MongoDB Crash Course](https://www.youtube.com/watch?v=2QQGWYe7IDU)
- [Mongoose Tutorial](https://www.youtube.com/watch?v=DZBGEVgL2eE)

**📚 References**
- [MongoDB Official Site](https://www.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

---

## Fullstack

**[→ View Fullstack README](./fullstack/README.md)**

### Chat App
**Path:** `fullstack/chat-app/`

Building a real-time chat application using React frontend with WebSockets for bi-directional communication. Implementing features like message history, typing indicators, online status, and user authentication.

**📖 Articles**
- [Building Real-time Apps](https://www.pubnub.com/guides/websockets/)
- [WebSocket Chat Tutorial](https://socket.io/get-started/chat)

**🎥 YouTube**
- [Build a Chat App](https://www.youtube.com/watch?v=ZKEqqIO7n-k)
- [WebSocket Chat Tutorial](https://www.youtube.com/watch?v=rxzOqP9YwmM)

**📚 References**
- [Socket.io Documentation](https://socket.io/docs/)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

---

### tRPC Integration
**Path:** `fullstack/trpc-integration/`

Implementing end-to-end type-safe APIs with tRPC. Building React frontend that consumes tRPC backend with full TypeScript inference, no code generation, and excellent developer experience.

**📖 Articles**
- [tRPC Documentation](https://trpc.io/docs)
- [Introduction to tRPC](https://www.robinwieruch.de/react-trpc/)

**🎥 YouTube**
- [tRPC Tutorial](https://www.youtube.com/watch?v=UfUbBWIFdJs)
- [Building Apps with tRPC](https://www.youtube.com/watch?v=2LYM8gf184U)

**📚 References**
- [tRPC Official Docs](https://trpc.io/)
- [tRPC Examples](https://github.com/trpc/trpc/tree/main/examples)

---

### WebSockets App
**Path:** `fullstack/websockets-app/`

Creating a fullstack application with WebSocket connections for real-time features. Understanding WebSocket lifecycle, connection management, reconnection strategies, and scaling WebSocket servers.

**📖 Articles**
- [WebSockets Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [WebSocket Best Practices](https://ably.com/topic/websockets)

**🎥 YouTube**
- [WebSockets Tutorial](https://www.youtube.com/watch?v=1BfCnjr_Vjg)
- [Real-time with WebSockets](https://www.youtube.com/watch?v=i5OVcTdt_OU)

**📚 References**
- [WebSocket Protocol RFC](https://datatracker.ietf.org/doc/html/rfc6455)
- [ws Library Documentation](https://github.com/websockets/ws)

---

### Auth Implementation
**Path:** `fullstack/auth-implementation/`

Implementing authentication and authorization in fullstack applications. Understanding JWT tokens, refresh tokens, session management, OAuth integration, password hashing, and security best practices for both frontend and backend.

**📖 Articles**
- [JWT Authentication Guide](https://jwt.io/introduction)
- [Authentication Best Practices](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

**🎥 YouTube**
- [JWT Authentication Tutorial](https://www.youtube.com/watch?v=mbsmsi7l3r4)
- [OAuth 2.0 Explained](https://www.youtube.com/watch?v=996OiexHze0)

**📚 References**
- [Passport.js Documentation](http://www.passportjs.org/)
- [Auth0 Documentation](https://auth0.com/docs)

---

## Infrastructure

**[→ View Infrastructure README](./infrastructure/README.md)**

### Docker Core 
**Path:** `infrastructure/docker`

**Sub-Content:** `dockerFile/dockerCompose/yaml/docker-deployment-pipeline/Containerization/`

Learning Docker fundamentals including containerization concepts, Dockerfiles, building images, running containers, volumes, networks, and docker-compose for multi-container applications.

Testing deployment strategies with Docker including blue-green deployments, rolling updates, health checks, and container orchestration basics. Preparing applications for production deployment.

Deploying Dockerized applications to DigitalOcean droplets and container registry. Understanding cloud deployment workflows, container registries, and managing production infrastructure.



**📖 Articles**
- [Docker Documentation](https://docs.docker.com/)
- [Docker Tutorial for Beginners](https://docker-curriculum.com/)
- [Docker Deployment Strategies](https://docs.docker.com/get-started/orchestration/)
- [Production-Ready Docker](https://dockerlabs.collabnix.com/docker/deployment/)
- [DigitalOcean Container Registry](https://docs.digitalocean.com/products/container-registry/)
- [Deploy Docker to DigitalOcean](https://docs.digitalocean.com/products/droplets/how-to/deploy-docker/)

**🎥 YouTube**
- [Docker Course for Beginners](https://www.youtube.com/watch?v=fqMOX6JJhGo)
- [Docker Crash Course](https://www.youtube.com/watch?v=pg19Z8LL06w)
- [Docker Deployment Strategies](https://www.youtube.com/watch?v=gW_EEoWrwLo)
- [Docker in Production](https://www.youtube.com/watch?v=sK5i-N34im8)
- [Deploy to DigitalOcean](https://www.youtube.com/watch?v=KFyRyIjHjO8)
- [Docker on DigitalOcean](https://www.youtube.com/watch?v=3c-iBn73dDE)

**📚 References**
- [Docker Official Docs](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [DigitalOcean Documentation](https://docs.digitalocean.com/)


---


### GitHub Actions
**Path:** `infrastructure/ci-cd/github-actions/`

Implementing CI/CD pipelines with GitHub Actions including automated testing, building, deployment workflows, secrets management, and matrix builds for multiple environments.

**📖 Articles**
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CI/CD with GitHub Actions](https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/)

**🎥 YouTube**
- [GitHub Actions Tutorial](https://www.youtube.com/watch?v=R8_veQiYBjI)
- [CI/CD Pipeline with GitHub Actions](https://www.youtube.com/watch?v=mFFXuXjVgkU)

**📚 References**
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

### Prometheus
**Path:** `infrastructure/observability/prometheus/`

Setting up Prometheus for metrics collection and monitoring. Understanding time-series data, PromQL query language, exporters, and configuring alerts for infrastructure and application monitoring.

**📖 Articles**
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)
- [Getting Started with Prometheus](https://prometheus.io/docs/prometheus/latest/getting_started/)

**🎥 YouTube**
- [Prometheus Monitoring Tutorial](https://www.youtube.com/watch?v=h4Sl21AKiDg)
- [Prometheus Complete Course](https://www.youtube.com/watch?v=7gW5pSM6dlU)

**📚 References**
- [Prometheus Official Site](https://prometheus.io/)
- [PromQL Cheat Sheet](https://promlabs.com/promql-cheat-sheet/)

---

### Grafana
**Path:** `infrastructure/observability/grafana/`

Building monitoring dashboards with Grafana for visualizing metrics from Prometheus and other data sources. Creating custom dashboards, alerts, and understanding data visualization best practices.

**📖 Articles**
- [Grafana Documentation](https://grafana.com/docs/grafana/latest/)
- [Grafana Getting Started](https://grafana.com/docs/grafana/latest/getting-started/)

**🎥 YouTube**
- [Grafana Crash Course](https://www.youtube.com/watch?v=QDqbdPZEON4)
- [Grafana Dashboards Tutorial](https://www.youtube.com/watch?v=Eiq7sLppLlw)

**📚 References**
- [Grafana Official Site](https://grafana.com/)
- [Grafana Dashboard Gallery](https://grafana.com/grafana/dashboards/)

---

### Turborepo
**Path:** `infrastructure/monorepos/turborepo/`

Experimenting with Turborepo for managing monorepos. Understanding task orchestration, caching, remote caching, and organizing multiple packages and applications in a single repository.

**📖 Articles**
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Why Turborepo](https://vercel.com/blog/turbo)

**🎥 YouTube**
- [Turborepo Tutorial](https://www.youtube.com/watch?v=9iU_IE6vnJ8)
- [Monorepo with Turborepo](https://www.youtube.com/watch?v=YQLw5kJ1yrQ)

**📚 References**
- [Turborepo Official Docs](https://turbo.build/)
- [Turborepo Examples](https://github.com/vercel/turbo/tree/main/examples)

---

## System Design

**[→ View System Design README](./system-design/README.md)**

### URL Shortener
**Path:** `system-design/url-shortener/`

Designing and implementing a URL shortening service. Understanding system design concepts including ID generation, database sharding, caching strategies, rate limiting, and handling high traffic. Includes both theoretical design and practical implementation.

**📖 Articles**
- [Designing a URL Shortener](https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers/system-design-tinyurl)
- [URL Shortener System Design](https://systemdesign.one/url-shortening-system-design/)

**🎥 YouTube**
- [URL Shortener System Design](https://www.youtube.com/watch?v=fMZMm_0ZhK4)
- [Building a URL Shortener](https://www.youtube.com/watch?v=AVztRY77xxA)

**📚 References**
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Base62 Encoding](https://www.khanacademy.org/computing/computer-science/cryptography/ciphers/a/base-62-encoding)

---

### Rate Limiter
**Path:** `system-design/rate-limiter/`

Designing and building a rate limiting system. Understanding different rate limiting algorithms (token bucket, leaky bucket, sliding window), distributed rate limiting, and protecting APIs from abuse.

**📖 Articles**
- [Rate Limiting Algorithms](https://blog.algomaster.io/p/rate-limiting-algorithms-explained-with-code)
- [Distributed Rate Limiting](https://engineering.grab.com/frequency-capping)

**🎥 YouTube**
- [Rate Limiter System Design](https://www.youtube.com/watch?v=mhUQe4BKZXs)
- [Building a Rate Limiter](https://www.youtube.com/watch?v=FU4WlwfS3G0)

**📚 References**
- [Redis Rate Limiting](https://redis.io/docs/manual/patterns/rate-limiter/)
- [API Gateway Rate Limiting](https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-proxied-http/)

---

## DSA

**[→ View DSA README](./dsa/README.md)**

### Arrays
**Path:** `dsa/data-structures/arrays/`

Fundamental array operations and problems including searching, sorting, two-pointer techniques, prefix sums, and array manipulation. Building strong foundations for algorithmic problem-solving.

**📖 Articles**
- [Array Data Structure](https://www.geeksforgeeks.org/array-data-structure/)
- [Array Interview Problems](https://www.techinterviewhandbook.org/algorithms/array/)

**🎥 YouTube**
- [Array Problems and Solutions](https://www.youtube.com/watch?v=bD8RT0ub--0)
- [Arrays in DSA](https://www.youtube.com/watch?v=gDqQf4Ekr2A)

**📚 References**
- [LeetCode Arrays](https://leetcode.com/tag/array/)
- [Array Algorithms](https://cp-algorithms.com/data_structures/array.html)

---

### Linked Lists
**Path:** `dsa/data-structures/linked-lists/`

Understanding linked list operations including insertion, deletion, reversal, cycle detection, and solving problems with slow-fast pointer technique. Implementing singly and doubly linked lists.

**📖 Articles**
- [Linked List Data Structure](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [Linked List Problems](https://www.techinterviewhandbook.org/algorithms/linked-list/)

**🎥 YouTube**
- [Linked List Tutorial](https://www.youtube.com/watch?v=Nq7ok-OyEpg)
- [Linked List Problems](https://www.youtube.com/watch?v=R9PTBwOzceo)

**📚 References**
- [LeetCode Linked List](https://leetcode.com/tag/linked-list/)
- [Visualgo Linked List](https://visualgo.net/en/list)

---

### Trees
**Path:** `dsa/data-structures/trees/`

Binary trees, binary search trees, tree traversals (inorder, preorder, postorder, level-order), tree properties, and common tree problems. Understanding recursion through tree problems.

**📖 Articles**
- [Tree Data Structure](https://www.geeksforgeeks.org/binary-tree-data-structure/)
- [Tree Interview Problems](https://www.techinterviewhandbook.org/algorithms/tree/)

**🎥 YouTube**
- [Trees in DSA](https://www.youtube.com/watch?v=fAAZixBzIAI)
- [Binary Tree Problems](https://www.youtube.com/watch?v=H5JubkIy_p8)

**📚 References**
- [LeetCode Trees](https://leetcode.com/tag/tree/)
- [Tree Algorithms](https://cp-algorithms.com/data_structures/trees.html)

---

### Sliding Window
**Path:** `dsa/patterns/sliding-window/`

Mastering the sliding window pattern for solving problems involving subarrays or substrings. Understanding fixed and variable-size windows, and optimizing brute force solutions.

**📖 Articles**
- [Sliding Window Technique](https://www.geeksforgeeks.org/window-sliding-technique/)
- [Sliding Window Pattern](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/1175088/C++-Maximum-Sliding-Window-Cheatsheet-Template/)

**🎥 YouTube**
- [Sliding Window Tutorial](https://www.youtube.com/watch?v=jM2dhDPYMQM)
- [Sliding Window Problems](https://www.youtube.com/watch?v=EHCGAZBbB88)

**📚 References**
- [LeetCode Sliding Window](https://leetcode.com/tag/sliding-window/)
- [Pattern Guide](https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66)

---

### Two Pointers
**Path:** `dsa/patterns/two-pointers/`

Learning the two-pointer technique for solving array and linked list problems efficiently. Understanding different variations including opposite direction, same direction, and fast-slow pointers.

**📖 Articles**
- [Two Pointers Technique](https://www.geeksforgeeks.org/two-pointers-technique/)
- [Two Pointer Problems](https://leetcode.com/discuss/study-guide/1688903/Solved-all-two-pointers-problems-in-100-days)

**🎥 YouTube**
- [Two Pointers Tutorial](https://www.youtube.com/watch?v=On03HWe2tZM)
- [Two Pointer Pattern](https://www.youtube.com/watch?v=Qyz0lhKXxM8)

**📚 References**
- [LeetCode Two Pointers](https://leetcode.com/tag/two-pointers/)
- [Pattern Examples](https://emre.me/coding-patterns/two-pointers/)

---

## Computer Science Fundamentals

**[→ View CS Fundamentals README](./cs-fundamentals/README.md)**

### HTTP Server Implementation
**Path:** `cs-fundamentals/networking/http-server/`

Building an HTTP server from scratch to understand how web servers work at a fundamental level. Parsing HTTP requests, generating responses, handling headers, and implementing basic routing.

**📖 Articles**
- [Building an HTTP Server](https://ruslanspivak.com/lsbaws-part1/)
- [HTTP Protocol Internals](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

**🎥 YouTube**
- [Build HTTP Server from Scratch](https://www.youtube.com/watch?v=7GBlCinu9yg)
- [Understanding HTTP](https://www.youtube.com/watch?v=iYM2zFP3Zn0)

**📚 References**
- [HTTP/1.1 RFC](https://datatracker.ietf.org/doc/html/rfc2616)
- [Node.js HTTP Module](https://nodejs.org/api/http.html)

---

### TCP Chat
**Path:** `cs-fundamentals/networking/tcp-chat/`

Implementing a TCP-based chat application to understand socket programming, TCP protocol, client-server architecture, and handling multiple concurrent connections.

**📖 Articles**
- [TCP Socket Programming](https://www.geeksforgeeks.org/socket-programming-cc/)
- [Understanding TCP](https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/)

**🎥 YouTube**
- [TCP Socket Programming](https://www.youtube.com/watch?v=LtXEMwSG5-8)
- [Building a Chat Server](https://www.youtube.com/watch?v=8ARodQ4Wlf4)

**📚 References**
- [TCP RFC](https://datatracker.ietf.org/doc/html/rfc793)
- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)

---

## AI/ML

**[→ View AI/ML README](./ai-ml/README.md)**

### AI SDK
**Path:** `ai-ml/ai-sdk/`

Exploring AI SDK for integrating language models into applications. Understanding streaming responses, prompt engineering, function calling, and building AI-powered features.

**📖 Articles**
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Building AI Apps](https://vercel.com/blog/ai-sdk)

**🎥 YouTube**
- [AI SDK Tutorial](https://www.youtube.com/watch?v=1MYkB1g9hrU)
- [Building with AI SDK](https://www.youtube.com/watch?v=kCwtEO6YYE8)

**📚 References**
- [AI SDK Examples](https://sdk.vercel.ai/examples)
- [OpenAI API Docs](https://platform.openai.com/docs)

---

### LLM Workflows
**Path:** `ai-ml/llm-workflows/`

Building complex workflows with large language models including chaining prompts, managing context, implementing RAG (Retrieval Augmented Generation), and orchestrating multi-step AI processes.

**📖 Articles**
- [LLM Workflow Patterns](https://www.anthropic.com/index/building-effective-agents)
- [RAG Tutorial](https://www.pinecone.io/learn/retrieval-augmented-generation/)

**🎥 YouTube**
- [LLM Workflows Explained](https://www.youtube.com/watch?v=1OT_iQAMVJo)
- [Building RAG Systems](https://www.youtube.com/watch?v=sVcwVQRHIc8)

**📚 References**
- [LangChain Documentation](https://python.langchain.com/docs/get_started/introduction)
- [Vector Databases](https://www.pinecone.io/learn/vector-database/)

---

### Agents Basics
**Path:** `ai-ml/agents-basics/`

Understanding AI agents including autonomous decision-making, tool usage, planning, and building agents that can break down complex tasks and execute them independently.

**📖 Articles**
- [Introduction to AI Agents](https://www.anthropic.com/index/building-effective-agents)
- [AI Agent Patterns](https://lilianweng.github.io/posts/2023-06-23-agent/)

**🎥 YouTube**
- [AI Agents Explained](https://www.youtube.com/watch?v=F8NKVhkZZWI)
- [Building AI Agents](https://www.youtube.com/watch?v=IgaC9UD6bCU)

**📚 References**
- [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)
- [Agent Frameworks Comparison](https://www.langchain.com/agents)

---

## Concepts

**[→ View Concepts README](./concepts/README.md)**

### WebSockets Fundamentals
**Path:** `concepts/websockets/`

Deep dive into WebSocket protocol, understanding the WebSocket handshake, message framing, connection lifecycle, and differences between WebSockets and HTTP. Foundation for real-time applications.

**📖 Articles**
- [WebSocket Protocol](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Understanding WebSockets](https://ably.com/topic/websockets)

**🎥 YouTube**
- [WebSockets Explained](https://www.youtube.com/watch?v=1BfCnjr_Vjg)
- [WebSocket Protocol Deep Dive](https://www.youtube.com/watch?v=i5OVcTdt_OU)

**📚 References**
- [WebSocket RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455)
- [MDN WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

---

## Git Learning

**[→ View Git Learning README](./git-learning/README.md)**

### Branching Strategies
**Path:** `git-learning/branching-strategies/`

Learning different Git branching strategies including Git Flow, GitHub Flow, trunk-based development, and understanding when to use each strategy for different team sizes and project types.

**📖 Articles**
- [Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

**🎥 YouTube**
- [Git Branching Strategies](https://www.youtube.com/watch?v=aJnFGMclhU8)
- [Git Flow Tutorial](https://www.youtube.com/watch?v=1SXpE08hvGs)

**📚 References**
- [Atlassian Git Branching](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Git Documentation](https://git-scm.com/doc)

---

### Rebase Practice
**Path:** `git-learning/rebase-practice/`

Mastering Git rebase for maintaining clean commit history. Understanding interactive rebase, squashing commits, reordering commits, and resolving rebase conflicts safely.

**📖 Articles**
- [Git Rebase Documentation](https://git-scm.com/docs/git-rebase)
- [Rebase vs Merge](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

**🎥 YouTube**
- [Git Rebase Tutorial](https://www.youtube.com/watch?v=f1wnYdLEpgI)
- [Interactive Rebase](https://www.youtube.com/watch?v=tukOm3Afd8s)

**📚 References**
- [Pro Git Book - Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
- [Git Rebase Guide](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)

---

## Contributing

Feel free to explore, learn, and contribute! If you find helpful resources or have suggestions for improvements, please open an issue or pull request.

## License

This repository is for educational purposes. Individual projects may have their own licenses.