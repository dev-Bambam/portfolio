# Frontend API Documentation

## Base URL

```
/api/v1/read
```

## Endpoints

### Skills

#### Get All Skills

-  **Endpoint**: `GET /skills`
-  **Description**: Retrieves all skills, optionally filtered by category
-  **Query Parameters**:
   -  `category` (optional): Filter skills by category (Frontend | Backend | DevOps | Database |
      AI/ML | Tools | Business)
-  **Response Format**:

```json
{
  "status": "success",
  "data": {
    "skills": [
      {
        "_id": "string",
        "name": "string",
        "proficiency": "Beginner" | "Intermediate" | "Advanced",
        "category": "Frontend" | "Backend" | "DevOps" | "Database" | "AI/ML" | "Tools" | "Business"
      }
    ]
  }
}
```

#### Get Skill by ID

-  **Endpoint**: `GET /skills/:skillId`
-  **Description**: Retrieves a specific skill by its ID
-  **Parameters**:
   -  `skillId`: The unique identifier of the skill
-  **Response Format**:

```json
{
  "status": "success",
  "data": {
    "skill": {
      "_id": "string",
      "name": "string",
      "proficiency": "Beginner" | "Intermediate" | "Advanced",
      "category": "Frontend" | "Backend" | "DevOps" | "Database" | "AI/ML" | "Tools" | "Business"
    }
  }
}
```

### Projects

#### Get All Projects

-  **Endpoint**: `GET /projects`
-  **Description**: Retrieves all projects
-  **Response Format**:

```json
{
   "status": "success",
   "data": {
      "projects": [
         {
            "_id": "string",
            "title": "string",
            "slug": "string",
            "shortDescription": "string",
            "fullDescription": "string",
            "techStack": ["string"],
            "screenshot": "string",
            "githubUrl": "string",
            "liveUrl": "string",
            "docUrl": "string"
         }
      ]
   }
}
```

#### Get Project by ID

-  **Endpoint**: `GET /projects/:id`
-  **Description**: Retrieves a specific project by its ID
-  **Parameters**:
   -  `id`: The unique identifier of the project
-  **Response Format**:

```json
{
   "status": "success",
   "data": {
      "project": {
         "_id": "string",
         "title": "string",
         "slug": "string",
         "shortDescription": "string",
         "fullDescription": "string",
         "techStack": ["string"],
         "screenshot": "string",
         "githubUrl": "string",
         "liveUrl": "string",
         "docUrl": "string"
      }
   }
}
```

#### Get Project by Slug

-  **Endpoint**: `GET /projects/slug/:slug`
-  **Description**: Retrieves a specific project by its slug
-  **Parameters**:
   -  `slug`: The URL-friendly slug of the project
-  **Response Format**: Same as Get Project by ID

### Bio

#### Get Bio

-  **Endpoint**: `GET /bio`
-  **Description**: Retrieves the personal biography information
-  **Response Format**:

```json
{
   "status": "success",
   "data": {
      "bio": {
         "_id": "string",
         "name": "string",
         "summary": "string",
         "fullBio": "string",
         "profileImageUrl": "string",
         "socialLinks": [
            {
               "name": "string",
               "url": "string"
            }
         ],
         "certificates": [
            {
               "institution": "string",
               "certImageUrl": "string"
            }
         ]
      }
   }
}
```

### How I Built This

#### Get Project Details

-  **Endpoint**: `GET /how-i-built-this`
-  **Description**: Retrieves technical details about how the portfolio was built
-  **Response Format**:

```json
{
   "status": "success",
   "data": {
      "details": {
         "architectureOverview": "string",
         "backendStack": {
            "framework": "string",
            "database": "string",
            "orm": "string",
            "realtime": "string"
         },
         "frontendStack": {
            "framework": "string",
            "styling": "string"
         },
         "keyFeatures": {
            "realtime": "string",
            "asynchronous": "string",
            "security": "string"
         },
         "deployment": {
            "containerization": "string",
            "ciCd": "string"
         }
      }
   }
}
```

## Error Responses

All endpoints may return the following error responses:

```json
{
   "status": "error",
   "message": "Error description"
}
```

Common error codes:

-  `404`: Resource not found
-  `400`: Bad request
-  `500`: Internal server error

## Notes

-  All endpoints return data in JSON format
-  All successful responses follow the pattern: `{ status: "success", data: { ... } }`
-  No authentication is required for these read-only endpoints
-  Optional fields (marked with ? in types) may be null or undefined:
   -  Project: screenshot, liveUrl
   -  Bio: certificates array
-  Image URLs (profileImageUrl, certImageUrl, screenshot) will be fully qualified URLs
-  All string arrays may be empty but not null
-  Default values are empty strings ('') for most required fields
-  Skill proficiency is strictly typed as "Beginner", "Intermediate", or "Advanced"
-  Skill category must be one of: "Frontend", "Backend", "DevOps", "Database", "AI/ML", "Tools",
   "Business"
