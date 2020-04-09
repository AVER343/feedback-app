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
            "javascript_origins":["https://localhost:3000"],
            "sendGrid":"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"
            }
    }
const mongoDbUrl='mongodb+srv://aver343:drowssap@feedback-app-3rqn4.mongodb.net/test?retryWrites=true&w=majority'
const cookieKey="ThatRightThere"
const Publishable_key="pk_test_bl603zEfmCRS029f1nBjOK0l005vR1MWD5"
const Secret_key="sk_test_vWQ993FKQmeDK8l1kb8XTqGF00M9of6mNJ"
const Sendgrid_secret="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"
module.exports= {GoogleOAuth,mongoDbUrl,cookieKey,Publishable_key,Secret_key}