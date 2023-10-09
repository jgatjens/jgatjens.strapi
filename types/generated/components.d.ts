import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedCtalink extends Schema.Component {
  collectionName: 'components_shared_ctalinks';
  info: {
    displayName: 'cta link';
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
    displayName: 'job history';
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
    displayName: 'open graph';
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
    description: Attribute.RichText;
    url: Attribute.String;
    image: Attribute.Media;
    slug: Attribute.String;
    color: Attribute.String;
    tech_stack: Attribute.RichText;
    date: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.ctalink': SharedCtalink;
      'shared.experience': SharedExperience;
      'shared.opengraph': SharedOpengraph;
      'shared.profile': SharedProfile;
      'shared.work-detail': SharedWorkDetail;
    }
  }
}
