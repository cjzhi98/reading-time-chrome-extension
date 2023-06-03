window.addEventListener ("load", myMain, false);

function myMain (){
    const post = document.querySelector('div[data-test-id="post-content"]');

    if (post) {
      const text = post.textContent;
      const wordMatchRegExp = /[^\s]+/g; // Regular expression
      const words = text.matchAll(wordMatchRegExp);
      // matchAll returns an iterator, convert to array to get word count
      const wordCount = [...words].length;
      const readingTime = Math.round(wordCount / 200);
    
      const postDate = document.querySelector('span[data-testid="post_timestamp"]');
    
      console.log('Chrome Extension: ' + readingTime);
    
      const span = document.createElement('span');
      span.style.marginLeft = '3px';
      span.textContent = ` ${readingTime} min read`;
    
      postDate.insertAdjacentElement('afterend', span);
    }
}