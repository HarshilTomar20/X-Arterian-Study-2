# REST API
- Representational State Transfer (REST) is an architectural style for designing web services that emphasize scalability, simplicity, and reliability. RESTful APIs follow a set of principles and best practices to create consistent and maintainable APIs. Let's explore how to design and build RESTful APIs using Express.js.

# RESTful API Principles
- Client-Server Architecture: The client and server should be separate and independent.
- Stateless: The server should not store any client context between requests.
- Cacheable: Responses should be explicitly labeled as cacheable or non-cacheable.
- Uniform Interface: The API should have a consistent and well-defined interface.
- Layered System: The architecture should be composed of multiple layers, each with its own responsibilities.

# RESTful API Best Practices
- Use HTTP Methods Correctly: Use GET for retrieving resources, POST for creating resources, PUT for updating resources, and DELETE for deleting resources.
- Use Consistent URLs: Use nouns in the URL to represent resources, and use plural nouns for collections.
- Use HTTP Status Codes: Use appropriate HTTP status codes to indicate the success or failure of a request.
- Use JSON for Responses: Use JSON as the default format for responses.
- Provide Filtering, Sorting, and Pagination: Allow clients to filter, sort, and paginate results.
- Provide Versioning: Use versioning to handle breaking changes in the API.