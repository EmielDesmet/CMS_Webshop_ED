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

/* modules/contrib/views_bootstrap/templates/views-bootstrap-accordion.html.twig */
class __TwigTemplate_23579b3042e2173e2990d0234b49fca1 extends \Twig\Template
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
        // line 1
        echo "<div id=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 1, $this->source), "html", null, true);
        echo "\" ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 1), 1, $this->source), "html", null, true);
        echo ">
  ";
        // line 2
        $context["i"] = 0;
        // line 3
        echo "  ";
        $context["len"] = twig_length_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 3, $this->source));
        // line 4
        echo "  ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        foreach ($context['_seq'] as $context["key"] => $context["row"]) {
            // line 5
            $context["i"] = (($context["i"] ?? null) + 1);
            // line 6
            echo "    ";
            $context["collapse_class"] = (((((((            // line 7
($context["i"] ?? null) == 1) && twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, true, true, 7), "first", [], "any", true, true, true, 7)) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, false, true, 7), "first", [], "any", false, false, true, 7) > 0)) || (((            // line 8
($context["i"] ?? null) == ($context["len"] ?? null)) && twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, true, true, 8), "last", [], "any", true, true, true, 8)) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, false, true, 8), "last", [], "any", false, false, true, 8) > 0))) || ((((            // line 9
($context["i"] ?? null) != 1) && (($context["i"] ?? null) != ($context["len"] ?? null))) && twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, true, true, 9), "middle", [], "any", true, true, true, 9)) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, false, true, 9), "middle", [], "any", false, false, true, 9) > 0)))) ? ("collapse show") : ("collapse"));
            // line 12
            echo "    ";
            $context["collapse_class_boolean"] = (((((((            // line 13
($context["i"] ?? null) == 1) && twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, true, true, 13), "first", [], "any", true, true, true, 13)) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, false, true, 13), "first", [], "any", false, false, true, 13) > 0)) || (((            // line 14
($context["i"] ?? null) == ($context["len"] ?? null)) && twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, true, true, 14), "last", [], "any", true, true, true, 14)) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, false, true, 14), "last", [], "any", false, false, true, 14) > 0))) || ((((            // line 15
($context["i"] ?? null) != 1) && (($context["i"] ?? null) != ($context["len"] ?? null))) && twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, true, true, 15), "middle", [], "any", true, true, true, 15)) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "collapse", [], "any", false, false, true, 15), "middle", [], "any", false, false, true, 15) > 0)))) ? ("true") : ("false"));
            // line 18
            echo "      <div class=\"card\">
        <div class=\"class-header\" id=\"heading";
            // line 19
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["key"], 19, $this->source), "html", null, true);
            echo "\">
          <h5 class=\"mb-0\">
            <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#";
            // line 21
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 21, $this->source), "html", null, true);
            echo "-collapse-";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["key"], 21, $this->source), "html", null, true);
            echo "\" aria-expanded=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["collapse_class_boolean"] ?? null), 21, $this->source), "html", null, true);
            echo "\" aria-controls=\"collapseOne\">
              ";
            // line 22
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "title", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
            echo "
            </button>
          </h5>
        </div>

        <div id=\"";
            // line 27
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 27, $this->source), "html", null, true);
            echo "-collapse-";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["key"], 27, $this->source), "html", null, true);
            echo "\" class=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["collapse_class"] ?? null), 27, $this->source), "html", null, true);
            echo "\" aria-labelledby=\"heading";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["key"], 27, $this->source), "html", null, true);
            echo "\" data-parent=\"#";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 27, $this->source), "html", null, true);
            echo "\">
          <div class=\"card-body\">
              ";
            // line 29
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 29), 29, $this->source), "html", null, true);
            echo "
          </div>
        </div>
      </div>";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 34
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/views_bootstrap/templates/views-bootstrap-accordion.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  117 => 34,  107 => 29,  94 => 27,  86 => 22,  78 => 21,  73 => 19,  70 => 18,  68 => 15,  67 => 14,  66 => 13,  64 => 12,  62 => 9,  61 => 8,  60 => 7,  58 => 6,  56 => 5,  51 => 4,  48 => 3,  46 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/views_bootstrap/templates/views-bootstrap-accordion.html.twig", "C:\\xampp\\htdocs\\cms\\webshopDev\\web\\modules\\contrib\\views_bootstrap\\templates\\views-bootstrap-accordion.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 2, "for" => 4);
        static $filters = array("escape" => 1, "length" => 3);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'for'],
                ['escape', 'length'],
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
