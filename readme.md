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
- [React Core ](#react-core) - `react` `hooks` `state` `react-query`
- [Next.js ](#nextjs) - `nextjs` `routing` `ssr` `isr` `dynamic` `caching`
- [Next.js  Deployment Options](#nextjs-deployment) - `nextjs` `deployment` `coolify` `cloudflare`

- [TanStack Start Framework](#tanstack-start) - `react` `tanstack-start` `routing` `tanstack-ecosystem`

### Backend
- [API Design](#api-design) - `api` `bun` `restAPI`
- [Backend Fundamentals](#backend-fundamentals) - `http` `protocols` `networking` `routing`
- [TypeScript Backend](#typescript-backend) - `typescript` `nodejs` `backend`
- [Bun Backend](#bun-backend) - `bun` `typescript` `performance`
- [Kafka](#kafka) - `kafka` `messaging` `event-streaming`
- [Redis](#redis) - `redis` `caching` `data-store`
- [PostgreSQL](#postgresql) - `postgresql` `sql` `database`
- [Graphql](#graphql) - `graphql`
- [MongoDB](#mongodb) - `mongodb` `nosql` `database`

### Fullstack
- [React with Bun](#react-bun) - `performance`
- [WebSockets Fundamentals](#websockets-fundamentals) - `websockets` `realtime` `protocols`
- [Chat App](#chat-app) - `react` `websockets` `realtime` `fullstack`
- [tRPC Integration](#trpc-integration) - `trpc` `typescript` `api`
- [WebSockets App](#websockets-app) - `websockets` `realtime` `nodejs`
- [Auth Implementation](#auth-implementation) - `authentication` `jwt` `sessions`

### Infrastructure
- [Docker Basic + Deployment-cloud + docker Pipeline](#docker-core) - `docker` `containers` `deployment` `cloud` `digitalocean` 
- [Cloud Infra](#cloud-core) - `aws` `digital Ocean` `Coolify` `vercel` `serverless`
- [Prometheus + Grafana](#prometheus) - `LGTM stack` `monitoring` `metrics` `observability + visualization`
- [ELK](#observability) - `Elasticsearch` `Logstash` `Kibana`
- [Turborepo](#turborepo) - `monorepo` `build-tools`

### System Design
- [URL Shortener](#url-shortener) - `system-design` `distributed-systems`
- [Rate Limiter](#rate-limiter) - `system-design` `algorithms`
- [distributed cache](#distributed-cache)
- [load-balancer](#load-balancer)

### DSA
- [data-structures](#data-structures) - `dsa` `data-structures` `arrays` `graph` `heaps` `linked-list` `trees`

- [Patterns](#dsa-patterns) - `backtracking` `DP` `slding-window` `two-pointers` `algorithms`

### CS Fundamentals
- [Databases](#databases) - `db` `design` `building`
- [networking](#networking) - `networking` `tcp` `protocols` `osi model`
- [memory](#memory) 

### AI/ML
- [AI SDK](#ai-sdk) - `ai` `llm` `sdk`
- [LLM Workflows](#llm-workflows) - `llm` `workflows` `automation`
- [Agents Basics](#agents-basics) - `ai` `agents` `autonomous`


### Git and Github Learning with CI/CD pipelines
- [Branching Strategies](#branching-strategies) - `git` `branching` `workflows`
- [basic-workflows](#basic-workflows) - `git` `rebase` `history`
- [advance-workflows](#advance-workflows) - `git` `rebase` `history`

---

## 🔗 Learning Paths

**Frontend Development Track:**  
`languages/javascript` → `languages/typescript` → `frontend/react` → `frontend/nextjs`

**Backend Development Track:**  
`languages/typescript` → `backend/backend-fundamentals` → `backend/typescript-backend`

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

### React core
**Path:** `frontend/react/`

Exploring react and hooks with  state management approaches in React including useState, useReducer, Context API, and state management libraries with react query/tanstack query and zod and zustand

Understanding TanStack Query (React Query) for server state management, caching, background refetching, and optimistic updates. Managing async data with minimal boilerplate.

**📖 Articles**
- [React Documentation - Managing State](https://react.dev/learn/managing-state)
- [State Management in React](https://www.robinwieruch.de/react-state/)
- [TanStack Query Docs](https://tanstack.com/query/latest/docs/react/overview)
- [React Query Tutorial](https://tkdodo.eu/blog/practical-react-query)

**🎥 YouTube**
- [React State Management Tutorial](https://www.youtube.com/watch?v=35lXWvCuM8o)
- [Context API Deep Dive](https://www.youtube.com/watch?v=5LrDIWkK_Bc)
- [React Query Tutorial](https://www.youtube.com/watch?v=novnyCaa7To)
- [TanStack Query Deep Dive](https://www.youtube.com/watch?v=8K1N3fE-cDs)

**📚 References**
- [React Docs - State](https://react.dev/reference/react/useState)
- [Redux Documentation](https://redux.js.org/)
- [TanStack Query Documentation](https://tanstack.com/query)
- [React Query Examples](https://tanstack.com/query/latest/docs/react/examples/simple)


---

---

### Nextjs
**Path:** `frontend/nextjs/`

Understanding Next.js file-based routing system, pages directory structure, navigation between routes, caching and the Link component. Foundation for building Next.js applications. with dynamic routing etc

Learning about Next.js caching mechanisms including ISR (Incremental Static Regeneration), SSG (Static Site Generation), revalidation strategies, and cache control headers for optimal performance.

**📖 Articles**
- [Next.js Routing Documentation](https://nextjs.org/docs/routing/introduction)
- [Understanding Next.js Routing](https://www.freecodecamp.org/news/nextjs-routing-tutorial/)
- [Next.js Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)
- [Advanced Routing Patterns](https://vercel.com/guides/nextjs-dynamic-routing)
- [Next.js Caching Documentation](https://nextjs.org/docs/app/building-your-application/caching)
- [ISR Explained](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration)

**🎥 YouTube**
- [Next.js Routing Tutorial](https://www.youtube.com/watch?v=ZjAqacIC_3c)
- [Next.js App Router](https://www.youtube.com/watch?v=gSSsZReIFRk)
- [Dynamic Routes in Next.js](https://www.youtube.com/watch?v=fnpmR6Q5lEc)
- [Dynamic Routing Deep Dive](https://www.youtube.com/watch?v=3RYsHDzZKKc)
- [Next.js Caching Strategies](https://www.youtube.com/watch?v=VBlSe8tvg4U)
- [ISR in Next.js](https://www.youtube.com/watch?v=nrfuN_Hyd3Y)

**📚 References**
- [Next.js Official Documentation](https://nextjs.org/docs)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [Next.js Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)

---


### Next.js deployment options
**Path:** `frontend/nextjs/deployment-methods`

Deploying Next.js applications to Coolify, cloudflare a self-hosted PaaS alternative. Understanding the deployment pipeline, environment variables, and managing production builds.

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


### TanStack start framework
**Path:** `frontend/tanstack/`

Exploring TanStack Router and tanstack start for type-safe routing in React applications. Understanding route definitions, nested routes, route loaders, and search params validation.

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

### API Design
**Path:** `backend/api-design/`

Deep dive into api design HTTP protocol, request/response cycle, methods, status codes, headers, cookies, and sessions. Understanding how the api design for better performance

**📖 Articles**


**🎥 YouTube**


**📚 References**
- [HTTP/2 Documentation](https://http2.github.io/)
- [RESTful API Design](https://restfulapi.net/)
- [API Design Patterns](https://swagger.io/resources/articles/best-practices-in-api-design/)

---

### Backend Fundamentals
**Path:** `backend/backend-fundamentals/`

Exploring different routing patterns in backend applications including RESTful routing, nested routes, route parameters, middleware integration, and route organization strategies.

- [Backend from First Principles for in depth understanding](https://www.youtube.com/playlist?list=PLui3EUkuMTPgZcV0QhQrOcwMPcBCcd_Q1)

**📖 Articles**
- [Express Routing Guide](https://expressjs.com/en/guide/routing.html)
- [REST API Routing Best Practices](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/)

**🎥 YouTube**

- [REST API Design](https://www.youtube.com/watch?v=0oXYLzuucwE)




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


### tRPC Integration
**Path:** `fullstack/trpc-integration/`

Implementing end-to-end type-safe APIs with tRPC. Building React frontend that consumes tRPC backend with full TypeScript inference, no code generation, and excellent developer experience.

---

### WebSockets App
**Path:** `fullstack/websockets-app/`

Creating a fullstack application with WebSocket connections for real-time features. Understanding WebSocket lifecycle, connection management, reconnection strategies, and scaling WebSocket servers.

---

### Auth Implementation
**Path:** `fullstack/auth-implementation/`

Implementing authentication and authorization in fullstack applications. Understanding JWT tokens, refresh tokens, session management, OAuth integration, password hashing, and security best practices for both frontend and backend.

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

### Cloud Core
**Path:** `infrastructure/cloud/`

understanding and building projects using aws, using depolyment with digital ocean and how to's and coolify for next js with vercel and serverless understanding

---


### Prometheus + Grafana
**Path:** `infrastructure/observability/`

Setting up Prometheus for metrics collection and monitoring. Understanding time-series data, PromQL query language, exporters, and configuring alerts for infrastructure and application monitoring.


Building monitoring dashboards with Grafana for visualizing metrics from Prometheus and other data sources. Creating custom dashboards, alerts, and understanding data visualization best practices.

**📖 Articles**
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)
- [Getting Started with Prometheus](https://prometheus.io/docs/prometheus/latest/getting_started/)
- [Grafana Documentation](https://grafana.com/docs/grafana/latest/)
- [Grafana Getting Started](https://grafana.com/docs/grafana/latest/getting-started/)

**🎥 YouTube**
- [Prometheus Monitoring Tutorial](https://www.youtube.com/watch?v=h4Sl21AKiDg)
- [Prometheus Complete Course](https://www.youtube.com/watch?v=7gW5pSM6dlU)
- [Grafana Crash Course](https://www.youtube.com/watch?v=QDqbdPZEON4)
- [Grafana Dashboards Tutorial](https://www.youtube.com/watch?v=Eiq7sLppLlw)

**📚 References**
- [Prometheus Official Site](https://prometheus.io/)
- [PromQL Cheat Sheet](https://promlabs.com/promql-cheat-sheet/)

---


### Turborepo
**Path:** `infrastructure/monorepos/turborepo/`

Experimenting with Turborepo for managing monorepos. Understanding task orchestration, caching, remote caching, and organizing multiple packages and applications in a single repository.



---

## System Design

**[→ View System Design README](./system-design/README.md)**

### URL Shortener
### Rate Limiter
### Distributed cache
### Load balancer
**Path:** `system-design/*/`




---

## DSA

**[→ View DSA README](./dsa/README.md)**

### Data structures
**Path:** `dsa/data-structures/`

Fundamental array operations and problems including searching, sorting, two-pointer techniques, prefix sums, and array manipulation. Building strong foundations for algorithmic problem-solving.

### DSA patterns
**Path:** `dsa/patterns/`

Patterns like backtracking, dynamic programming, sliding window, two pointers with algorithmic applications



---

## Computer Science Fundamentals

**[→ View CS Fundamentals README](./cs-fundamentals/README.md)**

Databases
Networking
Memory

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


## Git and Gihub Learning with CI/CD pipelines

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

## Contributing

Feel free to explore, learn, and contribute! If you find helpful resources or have suggestions for improvements, please open an issue or pull request.

## License
