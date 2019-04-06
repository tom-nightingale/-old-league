import CMS from 'netlify-cms'

import IndexPagePreview from './preview-templates/IndexPagePreview'

import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import WebDesignPagePreview from './preview-templates/WebDesignPagePreview'
import WebDevelopmentPagePreview from './preview-templates/WebDevelopmentPagePreview'
import SeoPagePreview from './preview-templates/SeoPagePreview'
import PpcPagePreview from './preview-templates/PpcPagePreview'
import ContentMarketingPagePreview from './preview-templates/ContentMarketingPagePreview'
import CopywritingPagePreview from './preview-templates/CopywritingPagePreview'
import TelecomsPagePreview from './preview-templates/TelecomsPagePreview'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import CaseStudiesPreview from './preview-templates/CaseStudiesPreview'


CMS.registerPreviewTemplate('index', IndexPagePreview)

CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('web-design', WebDesignPagePreview)
CMS.registerPreviewTemplate('web-development', WebDevelopmentPagePreview)
CMS.registerPreviewTemplate('seo', SeoPagePreview)
CMS.registerPreviewTemplate('ppc', PpcPagePreview)
CMS.registerPreviewTemplate('content-marketing', ContentMarketingPagePreview)
CMS.registerPreviewTemplate('copywriting', CopywritingPagePreview)
CMS.registerPreviewTemplate('telecoms', TelecomsPagePreview)

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('case-studies', CaseStudiesPreview)
