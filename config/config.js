const GoogleOAuth =
    {"web":
            {"client_id":"452711888865-l24obm9ij0g3tj5pqsup7garcb8vh7nm.apps.googleusercontent.com",
            "project_id":"spheric-camera-273118",
            "auth_uri":"https://accounts.google.com/o/oauth2/auth",
            "token_uri":"https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
            "client_secret":"sM40aLzr4611gCthH6DIUVv0",
            "redirect_uris":["https://localhost:3000/auth/google/callback",
            "https://localhost:3000/auth/google"],
            "javascript_origins":["https://localhost:3000"]
            }
    }
const mongoDbUrl='mongodb+srv://aver343:drowssap@feedback-app-3rqn4.mongodb.net/test?retryWrites=true&w=majority'
const cookieKey="ThatRightThere"
module.exports= {GoogleOAuth,mongoDbUrl,cookieKey}