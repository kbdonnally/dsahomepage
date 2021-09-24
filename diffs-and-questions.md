# Theme Differences & Questions



## Differences

Differences between the Jekyll and Wordpress theme styling.

- URL for red splatter background:

```cs
url("http://dsarichmond.local/wp-content/uploads/2021/09/red-splatter.jpg")
```

- Category tag no longer wrapped in `ul li` &mdash; correct this in style.scss -> **done**
- Width on blog and other wrappers:

```scss
// original:
max-width: 900px;
margin: 0 auto;
padding: 0 8.33%;

// new:
max-width: calc(900px + 16.67vw);
```



## Questions & Comments

1. Is it okay to make new forms on the resources page? -> **yes**
2. How does the Minutes/Agenda plugin work?

## What's Left to Do

1. Add newsletter signup to design
2. Add hands/rose symbol to footer :heavy_check_mark:
3. Style newsletter signups section
4. Post page for initiatives
5. Make new Google forms and embed on pages
   1. Get email login :heavy_check_mark:
6. Figure out embedded forms
7. Get forms functioning
8. Add back splatter URL once finished adjusting CSS
9. Locate link to DSA Richmond Branding files, if they exist

