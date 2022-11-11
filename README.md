# YASSIR Hackathon Backend

RESTful API For The YASSIR Home Service Clent And Jobber ( Partner ) Apps

---

## Environments

-   Development environment: https://yassir-hackathon-backend-dev.herokuapp.com
-   Production environment: https://yassir-hackathon-backend.herokuapp.com/api/v1/jobber/all

---

## Endpoints

### Server Healthcheck

-   GET `/ping ` : healthcheck endpoint returning always 200 status

### Client App

-   GET `/client/:clinetid/profile` : get client's profile information
    -   `clientid` praram example: `c_1`
-   GET `/client/:clientid/requests/all` : get list of client's home services requests
    -   `clientid` param example: `c_1`
-   GET `/client/:clientid/request/:clientrequestid/offers/accepted` : for a particular client's request, get the list of accepted jobber's offers
    -   `clientid` param example: `c_1`
    -   `clientrequestid` param example: `cr_1`

### Jobber (Partner) App

-   GET `/jobber/:jobberid/profile`: get jobber's profile information
    -   `jobberid` param example: `j_1`
-   GET `/jobber/:jobberid/jobs/available`: get list of available jobber's jobs, inside his activity zone, matching his expertise field
    -   `jobberid` param example: `j_1`
-   GET `/jobber/:jobberid/jobs/accepted`: get list of accepted jobber's job
    -   -   `jobberid` param example: `j_1`

### Dashboard for YASSIR Operations ( outside of the Hackathon's scope )

-   GET `/client/all` : get all registered clients profiles
-   GET `/jobber/all` : get all registered jobbers profiles

---

## Techstack

-   Typescript
-   Node.js
-   Express.js

---

## Last Words

It was fun participating in this Hackathon, big shout out to my team that were working day an night

#YassirHackathon #NoLuckOnlyHardWork
