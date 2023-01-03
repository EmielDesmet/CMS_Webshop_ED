/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function (Drupal, DrupalGutenberg, drupalSettings, wp, $) {
  var updateDrupalBlockBasedOnMediaEntity = function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(id) {
      var dispatch, response, mediaEntity;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch = wp.data.dispatch;
              _context5.next = 3;
              return fetch(Drupal.url('editor/media/render/' + id));

            case 3:
              response = _context5.sent;

              if (!response.ok) {
                _context5.next = 9;
                break;
              }

              _context5.next = 7;
              return response.json();

            case 7:
              mediaEntity = _context5.sent;


              if (mediaEntity && mediaEntity.view_modes) {
                dispatch('drupal').setMediaEntity(id, mediaEntity);
              }

            case 9:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function updateDrupalBlockBasedOnMediaEntity(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  Drupal.isMediaEnabled = function () {
    return (drupalSettings.gutenberg || false) && drupalSettings.gutenberg['media-enabled'];
  };

  Drupal.isMediaLibraryEnabled = function () {
    return (drupalSettings.gutenberg || false) && drupalSettings.gutenberg['media-library-enabled'];
  };

  Drupal.toggleGutenbergLoader = function (state) {
    var $gutenbergLoader = $('#gutenberg-loading');
    if (state === 'show') {
      $gutenbergLoader.removeClass('hide');
    } else if (state === 'hide') {
      $gutenbergLoader.addClass('hide');
    }
  };

  Drupal.notifyError = function (message) {
    var rawHTML = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return wp.data.dispatch('core/notices').createErrorNotice(message, {
      isDismissible: true,
      __unstableHTML: rawHTML
    });
  };

  Drupal.notifySuccess = function (message) {
    var rawHTML = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return wp.data.dispatch('core/notices').createSuccessNotice(message, {
      isDismissible: true,
      __unstableHTML: rawHTML
    });
  };

  Drupal.AjaxCommands.prototype.reloadBlock = function () {
    var _this = this;

    var _wp$data = wp.data,
        select = _wp$data.select,
        dispatch = _wp$data.dispatch;

    var selectedBlock = select('core/block-editor').getSelectedBlock();
    var clientId = selectedBlock.clientId;
    var mediaEntityIds = selectedBlock.attributes.mediaEntityIds;


    _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('core/block-editor').updateBlock(clientId, {
                attributes: { mediaEntityIds: [] }
              });

            case 2:

              setTimeout(function () {
                dispatch('core/block-editor').updateBlock(clientId, {
                  attributes: { mediaEntityIds: mediaEntityIds }
                });
              }, 100);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  };

  wp.galleryBlockV2Enabled = false;

  Drupal.editors.gutenberg = {
    attach: function attach(element, format) {
      var _this2 = this;

      return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var $gutenbergLoader, _format$editorSetting, contentType, allowedBlocks, blackList, data, blocks, hooks, dispatch, addFilter, unregisterBlockType, unregisterBlockVariation, registerDrupalStore, registerDrupalBlocks, registerDrupalMedia, key, value, isWelcomeGuide, metaboxesContainer, metaboxForm, isFormValid, formSubmitted;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                $gutenbergLoader = $('#gutenberg-loading');

                $gutenbergLoader.html(Drupal.theme.ajaxProgressThrobber(Drupal.t('Loading')));

                if (!drupalSettings.gutenbergLoaded) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt('return', false);

              case 4:
                drupalSettings.gutenbergLoaded = true;

                _format$editorSetting = format.editorSettings, contentType = _format$editorSetting.contentType, allowedBlocks = _format$editorSetting.allowedBlocks, blackList = _format$editorSetting.blackList;
                data = wp.data, blocks = wp.blocks, hooks = wp.hooks;
                dispatch = data.dispatch;
                addFilter = hooks.addFilter;
                unregisterBlockType = blocks.unregisterBlockType, unregisterBlockVariation = blocks.unregisterBlockVariation;
                registerDrupalStore = DrupalGutenberg.registerDrupalStore, registerDrupalBlocks = DrupalGutenberg.registerDrupalBlocks, registerDrupalMedia = DrupalGutenberg.registerDrupalMedia;
                _context3.next = 13;
                return addFilter('blocks.registerBlockType', 'drupalgutenberg/custom-attributes', function (settings, name) {
                  settings.attributes = Object.assign(settings.attributes, {
                    mappingField: {
                      type: 'string',
                      default: ''
                    },
                    mappingAttribute: {
                      type: 'string',
                      default: ''
                    }
                  });

                  if (name === 'core/block') {
                    settings.attributes.ref = {
                      type: 'number'
                    };
                  }

                  return settings;
                });

              case 13:
                _context3.next = 15;
                return registerDrupalStore(data);

              case 15:
                _context3.next = 17;
                return registerDrupalBlocks(contentType);

              case 17:
                _context3.next = 19;
                return registerDrupalMedia();

              case 19:
                _context3.next = 21;
                return _this2._initGutenberg(element);

              case 21:
                setTimeout(function () {
                  window.dispatchEvent(new Event('resize'));
                }, 200);

                if (drupalSettings.gutenberg._listeners.init) {
                  drupalSettings.gutenberg._listeners.init.forEach(function (callback) {
                    callback();
                  });
                }

                if (drupalSettings.gutenberg.messages) {
                  Object.keys(drupalSettings.gutenberg.messages).forEach(function (key) {
                    drupalSettings.gutenberg.messages[key].forEach(function (message) {
                      switch (key) {
                        case 'error':
                          dispatch('core/notices').createErrorNotice(message);
                          break;
                        case 'warning':
                          dispatch('core/notices').createWarningNotice(message);
                          break;
                        case 'success':
                          dispatch('core/notices').createSuccessNotice(message);
                          break;
                        default:
                          dispatch('core/notices').createWarningNotice(message);
                          break;
                      }
                    });
                  });
                }

                $('div.messages--error').each(function (index, el) {
                  dispatch('core/notices').createErrorNotice($(el).html(), {
                    __unstableHTML: $(el).html()
                  });
                  $(el).remove();
                });

                $('div.messages--warning').each(function (index, el) {
                  dispatch('core/notices').createWarningNotice($(el).html(), {
                    __unstableHTML: $(el).html()
                  });
                  $(el).remove();
                });

                $('div.messages--success').each(function (index, el) {
                  dispatch('core/notices').createSuccessNotice($(el).html(), {
                    __unstableHTML: $(el).html()
                  });
                  $(el).remove();
                });

                blackList.filter(function (value) {
                  return !value.includes('drupalblock/');
                }).forEach(function (value) {
                  unregisterBlockType(value);
                });

                for (key in allowedBlocks) {
                  if (allowedBlocks.hasOwnProperty(key)) {
                    value = allowedBlocks[key];

                    if (!value && !key.includes('/all') && !key.includes('core-embed/') && !blackList.includes(key)) {
                      unregisterBlockType(key);
                    }

                    if (!value && key.includes('core-embed/')) {
                      unregisterBlockVariation('core/embed', key.split('core-embed/')[1]);
                    }
                  }
                }

                data.dispatch('core/edit-post').openGeneralSidebar('edit-post/document');

                data.dispatch('core/edit-post').setAvailableMetaBoxesPerLocation({
                  advanced: ['drupalSettings']
                });

                data.dispatch('core/edit-post').removeEditorPanel('post-status');

                isWelcomeGuide = data.select('core/edit-post').isFeatureActive('welcomeGuide');


                if (isWelcomeGuide) {
                  data.dispatch('core/edit-post').toggleFeature('welcomeGuide');
                }

                setTimeout(function () {
                  var $metaBoxContainer = $('.edit-post-meta-boxes-area.is-advanced .edit-post-meta-boxes-area__container');
                  drupalSettings.gutenberg.metaboxes.forEach(function (id) {
                    var $metabox = $('#' + id);
                    var metabox = $metabox.get(0);

                    Drupal.behaviors.editor.detach(metabox, drupalSettings);
                    $metabox.appendTo($metaBoxContainer);
                    Drupal.behaviors.editor.attach(metabox, drupalSettings);
                  });
                }, 0);

                metaboxesContainer = $(document.createElement('div'));

                metaboxesContainer.attr('id', 'metaboxes');
                $('body').append(metaboxesContainer);
                metaboxForm = $(document.createElement('form'));

                metaboxForm.addClass('metabox-location-advanced');
                metaboxesContainer.append(metaboxForm);

                $(document.forms[0]).attr('novalidate', true);

                setTimeout(function () {
                  $('.edit-post-header__settings').append($('.gutenberg-header-settings'));
                  $('.gutenberg-full-editor').addClass('ready');
                  Drupal.toggleGutenbergLoader('hide');
                }, 0);

                isFormValid = false;


                $('.gutenberg-header-settings .form-submit').on('mousedown', function (e) {
                  var _data$dispatch = data.dispatch('core/edit-post'),
                      openGeneralSidebar = _data$dispatch.openGeneralSidebar;

                  if (typeof element.form.checkValidity === 'function') {
                    isFormValid = element.form.checkValidity();
                  } else {
                    isFormValid = true;
                  }

                  if (!isFormValid) {
                    var isMetaboxValid = true;

                    $('#edit-metabox-fields :input').each(function (index, el) {
                      if (!el.checkValidity()) {
                        $('#edit-metabox-fields').attr('open', '');
                        isMetaboxValid = false;
                        return false;
                      }
                    });

                    if (isMetaboxValid) {
                      openGeneralSidebar('edit-post/document');
                      openGeneralSidebar('edit-post/document');
                    }

                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                });

                $('.gutenberg-header-settings .form-submit').on('click', function (e) {
                  $(e.currentTarget).attr('active', true);

                  $('#edit-additional-fields').attr('open', '');

                  $(element.form).removeAttr('novalidate');

                  isFormValid = element.form.reportValidity();

                  if (!isFormValid) {
                    $(e.currentTarget).removeAttr('active');
                  } else {
                    element.form.requestSubmit(e.currentTarget);
                  }

                  $(element.form).attr('novalidate', true);

                  if (!isFormValid) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                });

                formSubmitted = false;

                $(element.form).on('submit', function (e) {
                  var $source = $('input[active="true"]');

                  $source.removeAttr('active');

                  if (!$source.hasClass('form-submit') && $source.attr('id') !== 'edit-delete') {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }

                  $(element).val(data.select('core/editor').getEditedPostContent());

                  $(element).data({ 'editor-value-is-changed': true });
                  $(element).attr('data-editor-value-is-changed', true);

                  if (!formSubmitted) {
                    e.preventDefault();
                    e.stopPropagation();

                    _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                      var entitiesToSave, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref3, _ref4, index, _ref4$, kind, name, _key, property;

                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return data.select('drupal').getEntitiesToSave();

                            case 2:
                              entitiesToSave = _context2.sent;
                              _iteratorNormalCompletion = true;
                              _didIteratorError = false;
                              _iteratorError = undefined;
                              _context2.prev = 6;
                              _iterator = Object.entries(entitiesToSave)[Symbol.iterator]();

                            case 8:
                              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context2.next = 22;
                                break;
                              }

                              _ref3 = _step.value;
                              _ref4 = _slicedToArray(_ref3, 2);
                              index = _ref4[0];
                              _ref4$ = _ref4[1];
                              kind = _ref4$.kind;
                              name = _ref4$.name;
                              _key = _ref4$.key;
                              property = _ref4$.property;
                              _context2.next = 19;
                              return data.dispatch('core').saveEditedEntityRecord(kind, name, _key, property);

                            case 19:
                              _iteratorNormalCompletion = true;
                              _context2.next = 8;
                              break;

                            case 22:
                              _context2.next = 28;
                              break;

                            case 24:
                              _context2.prev = 24;
                              _context2.t0 = _context2['catch'](6);
                              _didIteratorError = true;
                              _iteratorError = _context2.t0;

                            case 28:
                              _context2.prev = 28;
                              _context2.prev = 29;

                              if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                              }

                            case 31:
                              _context2.prev = 31;

                              if (!_didIteratorError) {
                                _context2.next = 34;
                                break;
                              }

                              throw _iteratorError;

                            case 34:
                              return _context2.finish(31);

                            case 35:
                              return _context2.finish(28);

                            case 36:
                              _context2.next = 38;
                              return data.dispatch('core/editor').savePost({ isAutosave: false });

                            case 38:

                              formSubmitted = true;

                              $source.click();

                            case 40:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this2, [[6, 24, 28, 36], [29,, 31, 35]]);
                    }))();
                  }
                });

                return _context3.abrupt('return', true);

              case 49:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    },
    attachInlineEditor: function attachInlineEditor(element, format, mainToolbarId, floatedToolbarId) {
      return false;
    },
    detach: function detach(element, format, trigger) {
      return true;
    },
    onChange: function onChange(element, callback) {
      return true;
    },
    _initGutenberg: function _initGutenberg(element) {
      var _this3 = this;

      return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        var editPost, data, $textArea, target, $editor, editorSettings;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                editPost = wp.editPost, data = wp.data;
                $textArea = $(element);
                target = 'editor-' + $textArea.data('drupal-selector');
                $editor = $('<div id="' + target + '" class="gutenberg__editor"></div>');

                $editor.insertAfter($textArea);
                $textArea.hide();

                wp.node = {
                  categories: [],
                  content: {
                    block_version: 0,
                    protected: false,
                    raw: $(element).val(),
                    rendered: ''
                  },
                  featured_media: 0,
                  id: 1,
                  parent: 0,
                  permalink_template: '',
                  revisions: { count: 0, last_id: 1 },
                  status: 'auto-draft',
                  theme_style: true,
                  type: 'page',
                  slug: ''
                };

                editorSettings = _extends({}, DrupalGutenberg.defaultSettings ? DrupalGutenberg.defaultSettings : {}, drupalSettings.gutenberg['theme-support'], {
                  availableTemplates: [],
                  allowedBlockTypes: true,
                  disablePostFormats: false,
                  mediaLibrary: true,

                  imageSizes: drupalSettings.gutenberg['image-sizes'],
                  titlePlaceholder: Drupal.t('Add title'),
                  bodyPlaceholder: Drupal.t('Add text or type / to add content'),
                  isRTL: drupalSettings.gutenberg['is-rtl'],
                  localAutosaveInterval: 0,
                  autosaveInterval: 0,
                  template: drupalSettings.gutenberg.template || '',
                  templateLock: drupalSettings.gutenberg['template-lock'] === 'none' ? false : drupalSettings.gutenberg['template-lock'] || false
                });


                data.subscribe(function () {
                  var isFullscreenMode = data.select('core/edit-post').isFeatureActive('fullscreenMode');

                  setTimeout(function () {
                    var fullscreenLink = $('.edit-post-header a.edit-post-fullscreen-mode-close:not(.drupal)');

                    var drupalFullscreenLink = $('.edit-post-header a.edit-post-fullscreen-mode-close.drupal');

                    if (isFullscreenMode && fullscreenLink.length > 0 && drupalFullscreenLink.length === 0) {
                      var params = new URLSearchParams(window.location.search);
                      var backUrl = drupalSettings.path.baseUrl + 'admin/content';

                      if (RegExp(/node\/\d+\/edit/g).test(drupalSettings.path.currentPath)) {
                        backUrl = drupalSettings.path.baseUrl + drupalSettings.path.currentPath.replace('/edit', '');
                      }

                      backUrl = params.get('destination') || backUrl;

                      var domContainer = $('<div style="display: contents"></div>');
                      fullscreenLink.after(domContainer);

                      var icon = React.createElement(
                        'svg',
                        {
                          version: '1.1',
                          id: 'Layer_1',
                          x: '0px',
                          y: '0px',
                          className: 'dashicon',
                          viewBox: '0 0 42.2 55.5'
                        },
                        React.createElement(
                          'g',
                          { id: 'Livello_2' },
                          React.createElement(
                            'g',
                            { id: 'Livello_1-2' },
                            React.createElement('path', {
                              d: 'M29.8,11.7C25.9,7.9,22.2,4.2,21.1,0c-1.1,4.2-4.8,7.9-8.7,11.7C6.6,17.5,0,24.1,0,34 c-0.3,11.6,9,21.3,20.6,21.5s21.3-9,21.5-20.6c0-0.3,0-0.6,0-0.9C42.2,24.1,35.6,17.5,29.8,11.7z M10.8,35.9 c-0.6,0.8-1.2,1.7-1.6,2.6c-0.1,0.1-0.2,0.3-0.4,0.3H8.7c-0.5,0-1-0.9-1-0.9l0,0c-0.1-0.2-0.3-0.5-0.4-0.7L7.2,37 C5.9,34.2,7,30.3,7,30.3l0,0c0.5-1.9,1.4-3.8,2.5-5.4c0.7-1,1.5-2,2.3-3l1,1l4.7,4.8c0.2,0.2,0.2,0.5,0,0.7l-4.9,5.5l0,0 L10.8,35.9z M21.3,49.7c-4,0-7.3-3.3-7.2-7.3c0-1.8,0.7-3.5,1.8-4.8c1.5-1.8,3.4-3.6,5.5-6c2.4,2.6,4,4.3,5.5,6.3 c0.1,0.1,0.2,0.3,0.3,0.5c0.8,1.2,1.3,2.6,1.3,4.1C28.6,46.5,25.3,49.7,21.3,49.7C21.3,49.7,21.3,49.7,21.3,49.7z M35,38.1 L35,38.1c-0.1,0.3-0.4,0.5-0.7,0.6h-0.1c-0.3-0.1-0.5-0.3-0.7-0.5l0,0c-1.3-1.9-2.7-3.7-4.3-5.3l-1.9-2l-6.4-6.6 c-1.3-1.2-2.6-2.6-3.8-3.9c0-0.1-0.1-0.1-0.1-0.1c-0.2-0.3-0.4-0.6-0.5-1c0-0.1,0-0.1,0-0.2c-0.2-1.1,0.2-2.2,1-3 c1.2-1.2,2.5-2.5,3.7-3.8c1.3,1.4,2.7,2.8,4.1,4.2l0,0c2.8,2.6,5.3,5.5,7.6,8.6c1.9,2.7,2.9,5.8,2.9,9.1 C35.6,35.4,35.4,36.8,35,38.1z'
                            })
                          )
                        )
                      );

                      var render = wp.element.render;
                      var Button = wp.components.Button;

                      var drupalButton = React.createElement(Button, {
                        className: 'edit-post-fullscreen-mode-close drupal',
                        icon: icon,
                        iconSize: 36,
                        href: backUrl,
                        label: Drupal.t('Back')
                      });

                      render(drupalButton, domContainer[0]);
                    }
                  });

                  if (!data.select('core/block-editor').isValidTemplate()) {
                    data.dispatch('core/block-editor').setTemplateValidity(true);
                  }
                });

                sessionStorage.removeItem('wp-autosave-block-editor-post-1');
                localStorage.removeItem('wp-autosave-block-editor-post-1');

                _context4.next = 13;
                return editPost.initializeEditor(target, 'page', 1, editorSettings);

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    }
  };

  Drupal.behaviors.gutenbergMediaLibrary = {
    attach: function attach(context) {
      var $form = $('#media-entity-browser-modal .media-library-add-form');
      var $context = $(context);
      var $dialog = $context.closest('.ui-dialog-content');

      if (!$form.length) {
        return;
      }

      $form.find('[data-drupal-selector="edit-save-insert"]').css('display', 'none');

      if (context && context.id === 'media-library-add-form-wrapper') {
        var saveAndSelectButton = $form.find('[data-drupal-selector="edit-save-select"]');
        if (saveAndSelectButton.length) {
          saveAndSelectButton.css({
            display: 'none'
          });

          var originalButtons = $dialog.dialog('option', 'buttons');
          var buttons = [];
          buttons.push({
            text: saveAndSelectButton.html() || saveAndSelectButton.attr('value'),
            class: saveAndSelectButton.attr('class'),
            click: function click(e) {
              saveAndSelectButton.trigger('mousedown').trigger('mouseup').trigger('click');

              $dialog.dialog('option', 'buttons', originalButtons);
              e.preventDefault();
            }
          });
          $dialog.dialog('option', 'buttons', buttons);
        }
      }
    }
  };

  Drupal.AjaxCommands.prototype.gutenbergUpdateMediaEntities = function () {
    var _wp$data2 = wp.data,
        select = _wp$data2.select,
        dispatch = _wp$data2.dispatch;

    var selectedBlock = select('core/block-editor').getSelectedBlock();
    var clientId = selectedBlock.clientId,
        attributes = selectedBlock.attributes;
    var mediaEntityIds = attributes.mediaEntityIds;

    updateDrupalBlockBasedOnMediaEntity(mediaEntityIds[0]);
  };
})(Drupal, DrupalGutenberg, drupalSettings, window.wp, jQuery);