import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'YOUR_GITHUB_USERNAME/cubbyandsort-blog',
  },
  ui: {
    brand: {
      name: 'Cubby & Sort',
    },
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Meta Description',
          description: 'Used for SEO and social sharing. 150–160 characters.',
          multiline: true,
        }),
        publishDate: fields.date({ label: 'Publish Date' }),
        updatedDate: fields.date({ label: 'Last Updated', validation: { isRequired: false } }),
        heroImage: fields.image({
          label: 'Hero Image (2:3 ratio for Pinterest)',
          description: 'Upload a tall image (e.g. 800×1200px) for best Pinterest performance.',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        heroAlt: fields.text({ label: 'Hero Image Alt Text' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Bathroom Storage', value: 'bathroom-storage' },
            { label: 'Small Bathroom Ideas', value: 'small-bathroom-ideas' },
            { label: 'Renter-Friendly', value: 'renter-friendly' },
            { label: 'Owner Updates', value: 'owner-updates' },
            { label: 'Organization Tips', value: 'organization-tips' },
            { label: 'Product Reviews', value: 'product-reviews' },
          ],
          defaultValue: 'bathroom-storage',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: (props) => props.value }
        ),
        featured: fields.checkbox({ label: 'Featured post', defaultValue: false }),
        pinterestDescription: fields.text({
          label: 'Pinterest Pin Description',
          description: 'Optimized copy for when visitors save this post to Pinterest. ~100 chars.',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/posts',
              publicPath: '/images/posts/',
            },
          },
        }),
      },
    }),

    categories: collection({
      label: 'Categories',
      slugField: 'name',
      path: 'src/content/categories/*',
      schema: {
        name: fields.slug({ name: { label: 'Category Name' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        heroImage: fields.image({
          label: 'Category Image',
          directory: 'public/images/categories',
          publicPath: '/images/categories/',
        }),
      },
    }),
  },

  singletons: {
    siteSettings: {
      label: 'Site Settings',
      path: 'src/content/settings/site',
      schema: {
        siteName: fields.text({ label: 'Site Name', defaultValue: 'Cubby & Sort' }),
        tagline: fields.text({ label: 'Tagline', defaultValue: 'Small Bathroom, Big Ideas' }),
        description: fields.text({
          label: 'Site Description',
          multiline: true,
          defaultValue: 'Bathroom storage and organization ideas for renters and owners. Small space solutions that actually work.',
        }),
        pinterestUsername: fields.text({ label: 'Pinterest Username' }),
        twitterHandle: fields.text({ label: 'Twitter / X Handle' }),
        googleAdsenseId: fields.text({ label: 'Google AdSense Publisher ID', description: 'e.g. ca-pub-XXXXXXXXXXXXXXXX' }),
      },
    },
  },
});
