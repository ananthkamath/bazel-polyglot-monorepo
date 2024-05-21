### Load http_archive to help loading bazel rules
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

### Pull the python rules for Bazel
http_archive(
    name = "rules_python",
    sha256 = "b593d13bb43c94ce94b483c2858e53a9b811f6f10e1e0eedc61073bd90e58d9c",
    strip_prefix = "rules_python-0.12.0",
    url = "https://github.com/bazelbuild/rules_python/archive/refs/tags/0.12.0.tar.gz",
)

### Python dependency setup
load("@rules_python//python:pip.bzl", "pip_install")
### Provide the path of requirements.txt file
pip_install(
    name = "python_deps",
    requirements = "//third_party:requirements.txt",
)


### Pull the go rules for Bazel
http_archive(
    name = "io_bazel_rules_go",
    integrity = "sha256-fHbWI2so/2laoozzX5XeMXqUcv0fsUrHl8m/aE8Js3w=",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.44.2/rules_go-v0.44.2.zip",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.44.2/rules_go-v0.44.2.zip",
    ],
)

# Download Gazelle.
http_archive(
    name = "bazel_gazelle",
    integrity = "sha256-MpOL2hbmcABjA1R5Bj2dJMYO2o15/Uc5Vj9Q0zHLMgk=",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.35.0/bazel-gazelle-v0.35.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.35.0/bazel-gazelle-v0.35.0.tar.gz",
    ],
)


# Download Java JVM
RULES_JVM_EXTERNAL_TAG = "5.3"
RULES_JVM_EXTERNAL_SHA ="d31e369b854322ca5098ea12c69d7175ded971435e55c18dd9dd5f29cc5249ac"

http_archive(
    name = "rules_jvm_external",
    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,
    sha256 = RULES_JVM_EXTERNAL_SHA,
    url = "https://github.com/bazelbuild/rules_jvm_external/releases/download/%s/rules_jvm_external-%s.tar.gz" % (RULES_JVM_EXTERNAL_TAG, RULES_JVM_EXTERNAL_TAG)
)

# Download NodeJS Rules

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "c29944ba9b0b430aadcaf3bf2570fece6fc5ebfb76df145c6cdad40d65c20811",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.7.0/rules_nodejs-5.7.0.tar.gz"],
)

# Download NodeJS Rules Do Not Use
# http_archive(
#     name = "build_bazel_rules_nodejs",
#     sha256 = "c29944ba9b0b430aadcaf3bf2570fece6fc5ebfb76df145c6cdad40d65c20811",
#     urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.7.0/rules_nodejs-5.7.0.tar.gz"],
# )

# http_archive(
#     name = "aspect_rules_js",
#     sha256 = "e3e6c3d42491e2938f4239a3d04259a58adc83e21e352346ad4ef62f87e76125",
#     strip_prefix = "rules_js-1.30.0",
#     url = "https://github.com/aspect-build/rules_js/releases/download/v1.42.1/rules_js-v1.42.1.tar.gz",
# )

# http_archive(
#     name = "aspect_rules_ts",
#     sha256 = "4c3f34fff9f96ffc9c26635d8235a32a23a6797324486c7d23c1dfa477e8b451",
#     strip_prefix = "rules_ts-1.4.5",
#     url = "https://github.com/aspect-build/rules_ts/releases/download/v1.4.5/rules_ts-v1.4.5.tar.gz",
# )

### Go dependency setup
load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")
load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies", "go_repository")

# Declare Go direct dependencies.
go_repository(
    name = "com_github_gorilla_mux",
    importpath = "github.com/gorilla/mux",
    sum = "h1:i40aqfkR1h2SlN9hojwV5ZA91wcXFOvkdNIeFDP5koI=",
    version = "v1.8.0",
)

go_rules_dependencies()
go_register_toolchains(version = "1.20.7")

# Pull go dependencies via gazelle
gazelle_dependencies()


### Java setup
load("@rules_jvm_external//:repositories.bzl", "rules_jvm_external_deps")

rules_jvm_external_deps()

load("@rules_jvm_external//:setup.bzl", "rules_jvm_external_setup")

rules_jvm_external_setup()

load("@rules_jvm_external//:defs.bzl", "maven_install")

maven_install(
    artifacts = [
        "com.github.javafaker:javafaker:1.0.2",
    ],
    repositories = [
        "https://maven.google.com",
        "https://repo1.maven.org/maven2",
    ]
)

maven_install(
    maven_install_json = "@//:maven_install.json",
)

load("@maven//:defs.bzl", "pinned_maven_install")
pinned_maven_install()

## NodeJS setup
load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")
build_bazel_rules_nodejs_dependencies()

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories")
node_repositories()

load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")

npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

# # NodeJS setup Do Not Use

# load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

# rules_js_dependencies()

# load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

# nodejs_register_toolchains(
#     name = "nodejs",
#     node_version = DEFAULT_NODE_VERSION,
# )

# load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock")

# npm_translate_lock(
#     name = "npm",
#     npm_package_lock = "//:package.json",
#     verify_node_modules_ignored = "//:.bazelignore",
# )

# load("@npm//:repositories.bzl", "npm_repositories")
# npm_repositories()

# load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

# rules_ts_dependencies(
#     # This keeps the TypeScript version in-sync with the editor, which is typically best.
#     ts_version_from = "//:package.json",

#     # Alternatively, you could pick a specific version, or use
#     # load("@aspect_rules_ts//ts:repositories.bzl", "LATEST_TYPESCRIPT_VERSION")
#     # ts_version = LATEST_TYPESCRIPT_VERSION
# )