import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import WebDesignPagePreview from './preview-templates/WebDesignPagePreview'
import WebDevelopmentPagePreview from './preview-templates/WebDevelopmentPagePreview'
import SeoPagePreview from './preview-templates/SeoPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('web-design', WebDesignPagePreview)
CMS.registerPreviewTemplate('web-development', WebDevelopmentPagePreview)
CMS.registerPreviewTemplate('seo', SeoPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
