# bwa-react-native
Read here for environment set up | Skip if your environment is ready
<br />
https://reactnative.dev/docs/environment-setup
<br />
<h2>Running your React Native application</h2>
<h3>Step 1: Install dependencies</h3>
<p>First, you will need to install all dependencies to run this app</p>
<div class="language-shell codeBlockContainer_mQmQ theme-code-block" style="--prism-color:#FFFFFF;--prism-background-color:#282C34">
  <div class="codeBlockContent_D5yF">
    <pre tabindex="0" class="prism-code language-shell codeBlock_RMoD thin-scrollbar">
      <code class="codeBlockLines_AclH">
        <span class="token-line" style="color:#FFFFFF"><span class="token plain">npm install</span><br></span>
      </code>
    </pre>
  </div>
</div>
<h2>Running your React Native application</h2>
<h3>Step 2: Start Metro</h3>
<p>
  First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro &quot;takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies.&quot;—
  <a href="https://facebook.github.io/metro/docs/concepts" target="_blank" rel="noopener noreferrer">Metro Docs</a>
</p>
<p>To start Metro, run <code>npx react-native start</code> inside your React Native project folder:</p>
<div class="language-shell codeBlockContainer_mQmQ theme-code-block" style="--prism-color:#FFFFFF;--prism-background-color:#282C34">
  <div class="codeBlockContent_D5yF">
    <pre tabindex="0" class="prism-code language-shell codeBlock_RMoD thin-scrollbar">
      <code class="codeBlockLines_AclH">
        <span class="token-line" style="color:#FFFFFF"><span class="token plain">npx react-native start</span><br></span>
      </code>
    </pre>
  </div>
</div>
<p><code>react-native start</code> starts Metro Bundler.</p>
<blockquote>
  <p>If you use the Yarn package manager, you can use <code>yarn</code> instead of <code>npx</code> when running React Native commands inside an existing project.</p>
</blockquote>
<blockquote>
  <p>If you&#x27;re familiar with web development, Metro is a lot like webpack—for React Native apps. Unlike Kotlin or Java, JavaScript isn&#x27;t compiled—and neither is React Native. Bundling isn&#x27;t the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript.</p>
</blockquote>
<h3>Step 3: Start your application</h3>
<p>Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:</p>
<div class="language-shell codeBlockContainer_mQmQ theme-code-block" style="--prism-color:#FFFFFF;--prism-background-color:#282C34">
  <div class="codeBlockContent_D5yF">
    <pre tabindex="0" class="prism-code language-shell codeBlock_RMoD thin-scrollbar">
      <code class="codeBlockLines_AclH"><span class="token-line" style="color:#FFFFFF">
        <span class="token plain">npx react-native run-android</span><br></span>
      </code>
    </pre>
    <p>Or on iOS:</p>
    <pre tabindex="0" class="prism-code language-shell codeBlock_RMoD thin-scrollbar">
      <code class="codeBlockLines_AclH"><span class="token-line" style="color:#FFFFFF">
        <span class="token plain">npx react-native run-ios</span><br></span>
      </code>
    </pre>
  </div>
</div>
<h2>Run Fake REST API on your local machine</h2>
<h3>Step 4: Start local REST API server</h3>
<p>I use port 3004, you can use the same port or change to other port is 3004 is already in use</p>
<p>Let local fake rest api run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:</p>
<div class="language-shell codeBlockContainer_mQmQ theme-code-block" style="--prism-color:#FFFFFF;--prism-background-color:#282C34">
  <div class="codeBlockContent_D5yF">
    <pre tabindex="0" class="prism-code language-shell codeBlock_RMoD thin-scrollbar">
      <code class="codeBlockLines_AclH"><span class="token-line" style="color:#FFFFFF">
        <span class="token plain">npx json-server --watch ./FakeAPI/db.json --port 3004</span><br></span>
      </code>
    </pre>
  </div>
</div>
<p>If everything is set up correctly, you should see your local fake rest api is running.</p>
