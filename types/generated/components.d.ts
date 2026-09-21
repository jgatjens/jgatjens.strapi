import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedCategoriesSelector extends Schema.Component {
  collectionName: 'components_shared_categories_selector';
  info: {
    displayName: 'Categories';
    icon: 'checkSquare';
    description: 'Select project categories using checkboxes';
  };
  attributes: {
    web: Attribute.Boolean & Attribute.DefaultTo<false>;
    mobile: Attribute.Boolean & Attribute.DefaultTo<false>;
    backend: Attribute.Boolean & Attribute.DefaultTo<false>;
    headless_cms: Attribute.Boolean & Attribute.DefaultTo<false>;
    animations: Attribute.Boolean & Attribute.DefaultTo<false>;
    cms: Attribute.Boolean & Attribute.DefaultTo<false>;
    design_systems: Attribute.Boolean & Attribute.DefaultTo<false>;
    ai: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedCtalink extends Schema.Component {
  collectionName: 'components_shared_ctalinks';
  info: {
    displayName: 'link_cta';
    icon: 'exit';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    external: Attribute.Boolean;
  };
}

export interface SharedExperience extends Schema.Component {
  collectionName: 'components_shared_experiences';
  info: {
    displayName: 'job_history';
    icon: 'file';
    description: '';
  };
  attributes: {
    company: Attribute.String;
    company_url: Attribute.Component<'shared.ctalink'>;
    job_name: Attribute.String;
    skills: Attribute.RichText;
    date: Attribute.String;
  };
}

export interface SharedOpengraph extends Schema.Component {
  collectionName: 'components_shared_opengraphs';
  info: {
    displayName: 'open_graph';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    keywords: Attribute.String & Attribute.Required;
    media: Attribute.Media;
    username: Attribute.String & Attribute.DefaultTo<'jgatjens'>;
  };
}

export interface SharedProfile extends Schema.Component {
  collectionName: 'components_shared_profiles';
  info: {
    displayName: 'profile';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    headline: Attribute.String;
    location: Attribute.String & Attribute.Required;
    media: Attribute.Media;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface SharedWorkDetail extends Schema.Component {
  collectionName: 'components_shared_work_details';
  info: {
    displayName: 'project';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    headline: Attribute.String;
    overview: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    url: Attribute.String;
    media: Attribute.Media & Attribute.Required;
    slug: Attribute.String;
    color: Attribute.String;
    tech_stack: Attribute.RichText;
    date: Attribute.String;
    my_role: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    key_points: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    categories: Attribute.Component<'shared.categories-selector'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.categories-selector': SharedCategoriesSelector;
      'shared.ctalink': SharedCtalink;
      'shared.experience': SharedExperience;
      'shared.opengraph': SharedOpengraph;
      'shared.profile': SharedProfile;
      'shared.work-detail': SharedWorkDetail;
    }
  }
}
