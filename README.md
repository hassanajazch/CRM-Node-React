### Projcet Details

CRM using Node.js and ReactJS

#### Running Step Front-end
- Install node v12.18.0
- `cd frontend-app`
- Install Node packages - `npm install`
- Run applicaton - `npm start`

#### Running Step Backend
- Install node v12.18.0
- Use MongoDB
- `cd backend-app`
- Install Node packages - `npm install`
- Run applicaton - `npm run dev`

#### Code Style backend
- Perfectly follow Single Responsibility rule
- Use TRY - Catch to never miss any error and add proper logging
- Hash password using Bcrypt 
- API JWT authentication need to be implemented
- I kept all business logic inside app (service + repos)
- Add `prettier` to keep code ident
- Use `ESLint` to follow specific standards

#### Code Style frontend
- Follow component based approach
- Separation of stateful and stateless components
- Clean and Readable code
- Use `ESLint` to follow specific standards
- User `Materil-UI` for designing components

#### Testing
- I have used `JEST` for testing 
- Use AAA pattern for writing unit test (Arrange, Act, Assert)

#### Creating sample user:

- Create User
 URL: http://localhost:4000/api/user/createUser
 TYPE: POST
 BODY: {
        "email": "hassanajaz11@gmail.com",
        "name": "hassan",
        "role": "superadmin",
        "password": "hassan"
        }