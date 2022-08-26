<template>
  <div>
    <h1>Componenti Photo Community</h1>
    <div class="pc__flex--column">
      <h2>Buttons</h2>
      <div class="pc__flex--column">
        <div class="pc__flex--row">
          <button class="btn pc__btn-primary">
            <span class="material-icons-round">explore</span>
            Primary button
          </button>
          <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-primary&quot;&gt;
    &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
    Primary button
&lt;/button&gt;
          </pre>
          <button class="btn pc__btn-outline-primary">
            <span class="material-icons-round">explore</span>
            primary button
          </button>
          <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-outline-primary&quot;&gt;
    &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
    primary button
&lt;/button&gt;
          </pre>
        </div>
      </div>
      <h3>Disabled</h3>
      <div class="pc__flex--row">
        <button class="btn pc__btn-primary disabled">
          <span class="material-icons-round">explore</span>
          Primary button
        </button>
        <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-primary disabled&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
  Primary button
&lt;/button&gt;
        </pre>
        <button class="btn pc__btn-outline-primary disabled">
          <span class="material-icons-round">explore</span>
          primary button
        </button>
        <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-outline-primary disabled&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
  primary button
&lt;/button&gt;
        </pre>
      </div>
      <h3>Icons</h3>
      <div class="pc__flex--row">
        <button class="btn pc__btn-primary">
          <span class="material-icons-round">explore</span>
        </button>
        <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-primary&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
&lt;/button&gt;
        </pre>
        <button class="btn pc__btn-outline-primary">
          <span class="material-icons-round">explore</span>
        </button>
        <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-outline-primary&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
&lt;/button&gt;
        </pre>
        <button class="btn pc__btn-outline-primary borderless">
          <span class="material-icons-round">explore</span>
        </button>
        <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-outline-primary borderless&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
&lt;/button&gt;
        </pre>
      </div>
      <h3>Icons disabled</h3>
      <div class="pc__flex--row">
        <button class="btn pc__btn-primary disabled">
          <span class="material-icons-round">explore</span>
        </button>
        <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-primary disabled&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
&lt;/button&gt;
        </pre>
        <button class="btn pc__btn-outline-primary disabled">
          <span class="material-icons-round">explore</span>
        </button>
        <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-outline-primary disabled&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
&lt;/button&gt;
        </pre>
        <button class="btn pc__btn-outline-primary disabled borderless">
          <span class="material-icons-round">explore</span>
        </button>
        <pre class="pc__bg--neutral padding-2 pc__card">
&lt;button class=&quot;btn pc__btn-outline-primary borderless disabled&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;explore&lt;/span&gt;
&lt;/button&gt;
        </pre>
      </div>
      <h2>Header</h2>
      <h3>Base</h3>
      <div class="pc__flex--row justify-end pc__bg--primary-variant padding-2">
        <div class="btn pc__btn-outline-primary borderless">Home</div>
        <div class="btn pc__btn-outline-primary borderless">About</div>
        <div class="btn pc__btn-outline-primary borderless">Product</div>
        <div class="btn pc__btn-outline-primary borderless">Contacts</div>
      </div>
      <pre class="pc__card pc__bg--neutral">
&lt;div class=&quot;pc__flex--row justify-end pc__bg--primary padding-2&quot;&gt;
  &lt;div class=&quot;btn pc__btn-outline-primary borderless&quot;&gt;Home&lt;/div&gt;
  &lt;div class=&quot;btn pc__btn-outline-primary borderless&quot;&gt;About&lt;/div&gt;
  &lt;div class=&quot;btn pc__btn-outline-primary borderless&quot;&gt;Product&lt;/div&gt;
  &lt;div class=&quot;btn pc__btn-outline-primary borderless&quot;&gt;Contacts&lt;/div&gt;
&lt;/div&gt;
      </pre>
      <h3>In section</h3>
      <div class="pc__grid-3 padding-2 pc__bg--primary-variant">
        <div class="pc__grid--logo">Logo image</div>
        <div class="pc__grid--title pc__color--primary">
          <div class="pc__text--h3">Title</div>
        </div>
        <div class="pc__grid--actions">
          <div class="pc__flex--row align-center">
            <div class="pc__avatar--medium pc__color--primary">
              <span class="material-icons-round">account_circle</span>
            </div>
            <button class="btn pc__btn-outline-primary borderless">
              <span class="material-icons-round">logout</span>
            </button>
          </div>
        </div>
      </div>
      <pre class="pc__card pc__bg--neutral">
&lt;div class=&quot;pc__grid-3 padding-2 pc__bg--primary&quot;&gt;
    &lt;div class=&quot;pc__grid--logo&quot;&gt;Logo image&lt;/div&gt;
    &lt;div class=&quot;pc__grid--title pc__color--primary&quot;&gt;
        &lt;div class=&quot;pc__text--h3&quot;&gt;Title&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pc__grid--actions&quot;&gt;
        &lt;div class=&quot;pc__flex--row align-center&quot;&gt;
            &lt;div class=&quot;pc__avatar--medium pc__color--primary&quot;&gt;
                &lt;span class=&quot;material-icons-round&quot;&gt;account_circle&lt;/span&gt;
            &lt;/div&gt;
            &lt;button class=&quot;btn pc__btn-outline-primary borderless&quot;&gt;
                &lt;span class=&quot;material-icons-round&quot;&gt;logout&lt;/span&gt;
            &lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
      </pre>
      <h2>Avatars</h2>
      <div class="pc__flex--row">
        <div class="pc__flex--column">
          <h3>Small 20px x 20px</h3>
          <div class="pc__avatar--small">
            <span class="material-icons-round">account_circle</span>
          </div>
          <pre class="pc__card pc__bg--neutral">
&lt;div class=&quot;pc__avatar--small&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;account_circle&lt;/span&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="pc__flex--column">
          <h3>Medium 30px x 30px</h3>
          <div class="pc__avatar--medium">
            <span class="material-icons-round">account_circle</span>
          </div>
          <pre class="pc__card pc__bg--neutral">
&lt;div class=&quot;pc__avatar--medium&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;account_circle&lt;/span&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="pc__flex--column">
          <h3>Large 60px X 60px</h3>
          <div class="pc__avatar--large">
            <span class="material-icons-round">account_circle</span>
          </div>
          <pre class="pc__card pc__bg--neutral">
&lt;div class=&quot;pc__avatar--large&quot;&gt;
  &lt;span class=&quot;material-icons-round&quot;&gt;account_circle&lt;/span&gt;
&lt;/div&gt;
          </pre>
        </div>
      </div>
      <h2>Card</h2>
      <div class="pc__card fit-content">
        <div class="pc__flex--row">
          <div class="pc__avatar--medium">
            <span class="material-icons-round">account_circle</span>
          </div>
          <div class="pc__flex--column no-gap">
            <div class="pc__text--h3">Title of card</div>
            <div class="pc__text--caption">Subtitle of card</div>
          </div>
        </div>
        <img
          class="pc__image"
          src="../../assets/image-resources/unnamed.jpg"
          alt="Test"
        />
        <div class="pc__flex--row space-around">
          <button class="btn pc__btn-outline-primary borderless">
            <span class="material-icons-round">favorite_border</span>
          </button>
          <button class="btn pc__btn-outline-primary borderless">
            <span class="material-icons-round">share</span>
          </button>
          <button class="btn pc__btn-outline-primary borderless">
            <span class="material-icons-round">comment</span>
          </button>
        </div>
      </div>
      <pre class="pc__card pc__bg--neutral fit-content">
&lt;div class=&quot;pc__card&quot;&gt;
    &lt;div class=&quot;pc__flex--row&quot;&gt;
    &lt;div class=&quot;pc__avatar--medium&quot;&gt;
        &lt;span class=&quot;material-icons-round&quot;&gt;account_circle&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;pc__flex--column no-gap&quot;&gt;
        &lt;div class=&quot;pc__text--h3&quot;&gt;Title of card&lt;/div&gt;
        &lt;div class=&quot;pc__text--caption&quot;&gt;Subtitle of card&lt;/div&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;img
    class=&quot;pc__image&quot;
    src=&quot;../../assets/image-resources/unnamed.jpg&quot;
    alt=&quot;Test&quot;
    /&gt;
    &lt;div class=&quot;pc__flex--row space-around&quot;&gt;
    &lt;button class=&quot;btn pc__btn-outline-primary borderless&quot;&gt;
        &lt;span class=&quot;material-icons-round&quot;&gt;favorite_border&lt;/span&gt;
    &lt;/button&gt;
    &lt;button class=&quot;btn pc__btn-outline-primary borderless&quot;&gt;
        &lt;span class=&quot;material-icons-round&quot;&gt;share&lt;/span&gt;
    &lt;/button&gt;
    &lt;button class=&quot;btn pc__btn-outline-primary borderless&quot;&gt;
        &lt;span class=&quot;material-icons-round&quot;&gt;comment&lt;/span&gt;
    &lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
      </pre>
      <h2>Forms</h2>
      <div class="pc__card fit-content">
        <div class="pc__flex--column no-gap">
          <h3 class="align-center margin-2">Login</h3>
          <h4 class="pc__color--primary">Username</h4>
          <div class="pc__flex--row no-gap margin-2--bottom">
            <input type="text" class="pc__input padding-2" />
            <div class="padding-2 stretch pc__bg--neutral">
              <span class="material-icons-round align-center">person</span>
            </div>
          </div>
          <h4 class="pc__color--primary">Password</h4>
          <div class="pc__flex--row no-gap">
            <input type="password" class="pc__input padding-2" />
            <div class="padding-2 stretch pc__bg--neutral">
              <span class="material-icons-round align-center">key</span>
            </div>
          </div>
          <button class="btn pc__btn-primary margin-2--top margin-2--bottom">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentiPC",
  methods: {
    showCode() {
      console.log("Show Code!!");
    },
  },
};
</script>
