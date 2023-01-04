<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/views_bootstrap/templates/views-bootstrap-cards.html.twig */
class __TwigTemplate_c909b059c26f1aaa34fe9f44e3af22d6 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 13
        echo "
<div class=\"card-group\">
  ";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        foreach ($context['_seq'] as $context["key"] => $context["row"]) {
            // line 16
            echo "<div class=\"card\">
    ";
            // line 18
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, $context["row"], "image", [], "any", false, false, true, 18)) {
                // line 19
                echo "        ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "image", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
                echo "
    ";
            }
            // line 21
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, $context["row"], "title", [], "any", false, false, true, 21)) {
                // line 22
                echo "      <div class=\"card-header\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "title", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
                echo "</div>
    ";
            }
            // line 24
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 24)) {
                // line 25
                echo "      <div class=\"card-body\">
        ";
                // line 26
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 26), 26, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 29
            echo "  </div>";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 31
        echo "</div>";
    }

    public function getTemplateName()
    {
        return "modules/contrib/views_bootstrap/templates/views-bootstrap-cards.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  86 => 31,  80 => 29,  74 => 26,  71 => 25,  68 => 24,  62 => 22,  59 => 21,  53 => 19,  50 => 18,  47 => 16,  43 => 15,  39 => 13,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/views_bootstrap/templates/views-bootstrap-cards.html.twig", "C:\\xampp\\htdocs\\cms\\webshopDev\\web\\modules\\contrib\\views_bootstrap\\templates\\views-bootstrap-cards.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 15, "if" => 18);
        static $filters = array("escape" => 19);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for', 'if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
