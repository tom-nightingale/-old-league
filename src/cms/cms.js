import CMS from 'netlify-cms'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import WebDesignPagePreview from './preview-templates/WebDesignPagePreview'
import WebDevelopmentPagePreview from './preview-templates/WebDevelopmentPagePreview'
import SeoPagePreview from './preview-templates/SeoPagePreview'
import PpcPagePreview from './preview-templates/PpcPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'


CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('web-design', WebDesignPagePreview)
CMS.registerPreviewTemplate('web-development', WebDevelopmentPagePreview)
CMS.registerPreviewTemplate('seo', SeoPagePreview)
CMS.registerPreviewTemplate('ppc', PpcPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
