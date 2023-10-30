<h1 style="color:yellow"><center>Github CI/CD 🧾</center></h1>

## Table Of Contents

- []()

**[⬆ Back to Top](#table-of-contents)**

- Pre ci/cd days

  - no concept of automatic deployment
  - whenever you push to github, you also pull your code to the server

- Why today only backend?

  - Frontend dev is easy (vercel/netlify)
  - why it is easy -> just need to create html/css files and distrubute them
  - why backend hard -> every user gets different response, whereas everyone gets the same html/css/js (atleast until we reach next.js)

- High level steps
  (The dumb way to deploy)

  1. Choosing a cloud provider(AWS/GCP/Azure)
  2. Creating an instance
  3. Getting an ssh key
  4. Opening firewalls on the machine on port 80/443/22 (3000/3001?) (http:-> port 80 || https:-> port 443)
  5. Cloning your code to the machine
  6. Installing node/npm (why docker is useful)
  7. Building and running your code (pm2?)
  8. Pointing your domain to the server
  9. Using nginx to setup a reverse proxy
  10. Certificate management

- bare metal server vs cloud service provider

- Practical:

  1. Launch ec2 instance in the AWS console and select ubuntu
  2. Add rules in inbound rules in ec2 with port 80,443,3000 with allow ipv4 and ipv6 anywhere
  3. Then move the certificate file to the root folder of the application then open the terminal and run some commands

  ```sh
  <!-- This command rewrites the read and write permissions -->
  chmod 600 ./<certificateName.cer>

  <!-- To check for it run -->
  ls -ltr <certificateName>.cer
  ```

  after that run the ssh command

  ```sh
  ssh -i <certificateName>.cer ubuntu@<IPv4 of the ec2 instance>

  <!-- now ls and run npm install and run node index.js to run the server then hit the IPv4 address to get the webpage -->
  ```

  - Now run pm2 in the server so that it runs even if we exit the terminal or some error occur
    use commands like `pm2 list` and `pm2 logs`

    4.  Now we 2 problems it runs on port 3000 and the server is running on http which is not secure. Another problem is if we update our code in github then we have again come to the aws then ssh to our server then stop it and pull our code from github and redeploy it.

            How to update?
            i-> ssh into the machine
            ii-> pull your latest code
            iii-> stop existing process(pm2 kill)
            iv-> re-build the code
            v-> re run the code (pm2)

    5.  Now create a file in the root folder as deploy.sh using vi command then copy the content present in the part-2-scripts/deploy.sh file has.

    now we can do all the steps in to update using `source ./deploy.sh`

    But still it is a manual effort to run the script.

    To solve this write another file in root folder script-local.sh that file is in the part-2-scripts. Remember to change the ec2 url and certificate name. or run the command directly from the file changing the vars.

    Now it solves the problem a little more. Still the developer have to run the commands.

  - Github ci/cd solves the problem.

        - We write a github action script which is in part-3-ci-cd in yaml file
        - So what is the github secret in that file
          GitHub Secrets are a way to securely store sensitive information or configuration data that your GitHub Actions workflows or GitHub Apps might need. These secrets are encrypted and can only be accessed by authorized users and actions within your repository. GitHub Secrets are commonly used to store things like API keys, access tokens, and other confidential information. Here's how to use GitHub Secrets:

              Creating Secrets:

              1. Go to your GitHub repository.
              2. Click on the "Settings" tab.
              3. In the left sidebar, click on "Secrets."
              4. Click on the "New repository secret" button.
              5. Enter a name for the secret (e.g., API_KEY,SSH_PRIVATE_KEY) and the value (e.g., the actual API key).
              6. Click the "Add secret" button to save it.
                 Accessing Secrets in GitHub Actions:
                 You can access secrets within your GitHub Actions workflow using the secrets context. For example:

        ```sh
        jobs:
            deploy:
             runs-on: ubuntu-latest
             steps:
            - name: Deploy
             env:
                API_KEY: ${{ secrets.API_KEY }}
            run: |
                # Access the secret
                 echo "Using API Key: $API_KEY"

        ```

        - Create a repo of your own
        - `git remote add origin2 <https/ssh fo the repo>`
        - `git push origin2 master`
        - create folder in the root folder ".github/workflows/ci.yaml"
        - now paste the code in cd-easy.yaml present in part-3-ci-cd to ci.yaml
        - git add .github/
        - git commit -m "added the action"
        - git push origin2 master

        - Now if we push any changes to our code after that it will start the github acion but if we check in the ccommit section it will show a cross which states that it cannot verify the user.
        It happens bcz the first time we ssh the machine asks us a propmpt as y or n as fingerprint but we cannot do that in github so for that the cd-final.yaml is there with some modifications to add the known_host in the ssh file.

        To see the known host of that machine:
        run it in the same terminal with the repo
        ```sh
        ssh-keyscan ec2-url >> known_hosts
        ```
        Do this and push it the known hosts to github.

    **[⬆ Back to Top](#table-of-contents)**
